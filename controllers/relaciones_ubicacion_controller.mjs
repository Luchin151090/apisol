import modelUbicacion from "../models/relaciones_ubicacion_model.mjs";

export const getAllUbicaciones = async (req,res) => {
    try {
        const allubicaciones = await modelUbicacion.getUbicacion();
        res.status(200).json(allubicaciones);
    } catch (error) {
        res.status(500).json({error:error.message});

    }
}

export const createUbicacion = async (req,res) => {
    try{
        const newUbicacion = req.body;
        const ubicacionCreated = await modelUbicacion.createUbicacion(newUbicacion);
        res.status(200).json(ubicacionCreated);
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}