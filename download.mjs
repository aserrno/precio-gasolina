import fetch from 'node-fetch'
import { readFile, writeFile } from './fileUtils.js'
// import pkg from 'dotenv';
// const { dotenv } = pkg;
// pkg.config();

const FUEL_STATION_ID = process.env.FUEL_STATION_ID;
const GEOPORTAL_URL = `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${FUEL_STATION_ID}`

const date = new Intl.DateTimeFormat('es-ES', { month: 'numeric', day: 'numeric' }).format(Date.now())

fetch(GEOPORTAL_URL, {headers: { 'Accept': ' application/json' }})
.then(res => res.json())
.then((stationData) => {
    let dataSaved = readFile();

    //----------------------------------------------------------------
    // Replace price string to number ',' => '.'
    //----------------------------------------------------------------

    const priceGasolina95 = Number(stationData['ListaEESSPrecio'][0]['Precio Gasolina 95 E5'].replace(',','.'));
    const priceGasoleoA = Number(stationData['ListaEESSPrecio'][0]['Precio Gasoleo A'].replace(',','.'));

    //----------------------------------------------------------------
    
    if(dataSaved.dates.at(-1) === date){
      const numElments = dataSaved.dates.length - 1
      dataSaved.gasolina[numElments] = priceGasolina95
      dataSaved.diesel[numElments] = priceGasoleoA
    } else {
      dataSaved.dates.push(date)
      dataSaved.gasolina.push(priceGasolina95)
      dataSaved.diesel.push(priceGasoleoA)
    }
    
    //----------------------------------------------------------------
    // Manage Data. 30 Days max
    //----------------------------------------------------------------

    const dates = dataSaved.dates.slice(dataSaved.dates.length -30, dataSaved.dates.length);
    dataSaved.dates = dates;

    const gasolina = dataSaved.gasolina.slice(dataSaved.gasolina.length -30, dataSaved.gasolina.length);
    dataSaved.gasolina = gasolina;

    const diesel = dataSaved.diesel.slice(dataSaved.diesel.length -30, dataSaved.diesel.length);
    dataSaved.diesel = diesel;

    writeFile(dataSaved)

    //----------------------------------------------------------------

    console.log(`Fecha ${date} => Gasolina 95: ${priceGasolina95} - Gasoleo A: ${priceGasoleoA}`)
    
})
  .catch(err => {
    console.error(err)
  })
