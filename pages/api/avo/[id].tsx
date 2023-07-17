import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()

    const id = request.query.id


/* const entry = await db.getById(id as string)
  
   response.statusCode = 200 //ok                                   Todo esto se puede resumir en una sola linea
   response.setHeader('Content-type' , 'application/json')
   response.end(JSON.stringify({ data: entry }))*/
    
    const avo = await db.getById(id as string)
    response.status(200).json(avo)              /*Estas dos lineas son helpers que brinda NextJs */

}

export default allAvos
