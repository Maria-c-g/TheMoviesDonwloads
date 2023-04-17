import React, { useEffect, useState } from "react"
import herramientasJson from "../assets/herramientas.json";
import pruebasJson from "../assets/pruebas.json"
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@mui/material";
import "../App.css"
interface ObjetoDatos {
    index: number;
    src: string;
    nombre: string;
    autor: string;
    imagen: string;
}
interface Datos {
    [key: string]: ObjetoDatos[];
}
const datos: Datos = {
    herramientas: herramientasJson,
    pruebas: pruebasJson,
};
interface ICardCustom {
    image: string,
    name: string,
    author: string,
    url: string
}
const CardCustom: React.FC<ICardCustom> = ({ image, name, author, url }) => {
    return (
        <Card id="aaaaa" sx={{ width: "200px" }} >
            <CardMedia
                component="img"
                className="CardMedia-root"
                classes={{
                    img: "CardMedia-image"
                }}
                sx={{ height: 140 }}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Download</Button>
            </CardActions>
        </Card >
    )
}

type JsonNameType = "pruebas" | "herramientas";
const ListDownloads = ({ jsonName }: { jsonName: JsonNameType }) => {
    const [lista, setLista] = useState<ObjetoDatos[]>([]);

    useEffect(() => {
        const fetchList = async () => {
            const data = datos[jsonName];
            setLista(data);
            console.log("set lista", data)
        };
        fetchList();
    }, [jsonName]);


    return (
        <div>
            <h1> Este es el donwload: {jsonName}</h1>
            <h2>{jsonName} lista:</h2>
            <Grid container spacing={2}>
                {lista.map((lista) => (
                    <Grid item>
                        <CardCustom author={lista.autor}
                            image={lista.imagen}
                            name={lista.nombre}
                            url={lista.src}
                        />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default ListDownloads;