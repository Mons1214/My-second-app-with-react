import { Box, Typography } from "@mui/material";
import React from "react";



const EjericiosDeComponentes = () => {
    return (
        <Box>
            <Typography>Cuadrado</Typography>
            <Box sx={{
                border: "1px solid",
                width: "300px",
                height: "300px",
                backgroundColor: "antiquewhite"
            }} ></Box>

            <Typography>Circulo</Typography>
            <Box sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                backgroundColor: "aqua"
            }} />

            <Typography>Rectangulo</Typography>
            <Box sx={{
                border: "1px solid",
                width: "350px",
                height: "100px",
                backgroundColor: "azure"
            }}></Box>

            <Typography>Triangulo</Typography>
            <Box sx={{
                width: "0",
                height: "0",
                borderTop: "40px solid transparent",
                borderRight: "80px solid violet",
                borderBottom: "40px solid transparent"
            }} />

            <Typography>Cuadrado/Circulo</Typography>
            <Box sx={{
                border: "1px solid",
                width: "300px",
                height: "300px",
                backgroundColor: "turquoise",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }} >
                <Box sx={{
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "aliceblue",
                }} />
            </Box>

            <Typography>Cuadrado/Triangulo</Typography>
            <Box sx={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }} >
                <Box sx={{
                    width: "0",
                    height: "0",
                    borderTop: "40px solid transparent",
                    borderRight: "80px solid violet",
                    borderBottom: "40px solid transparent",
                    backgroundColor: "cyan"
                }} />
            </Box>


            <Typography>Circulo/Triangulo</Typography>
            <Box sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "flex",
                border: "1px solid",
                justifyContent: "center",
                backgroundColor: "palevioletred"
            }} >
                <Box sx={{
                    border: "1px solid",
                    width: "0",
                    height: "0",
                    borderLeft: "40px solid transparent",
                    borderRight: "40px solid transparent",
                    borderBottom: "80px solid lightblue",
                    borderTop: "10px"
                }} />
            </Box>


            <Typography>Circulo/Cuadrado</Typography>
            <Box sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                display: "flex",
                border: "1px solid",
                justifyContent: "center",
                alignItems: "center"
            }} >
                <Box sx={{
                    border: "1px solid",
                    width: "60%",
                    height: "60%"
                }} />
            </Box>


            <Typography>Componente</Typography>
            <Box sx={{
                border: "1px solid",
                width: "500px",
                height: "200px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end"
            }}>
                <Box sx={{
                    border: "1px solid",
                    width: "250px",
                    height: "200px",
                }}>
                    <Box sx={{
                        border: "1px solid",
                        width: "250px",
                        height: "100px"
                    }}
                    ></Box>
                </Box>
            </Box>

            <Typography>Componente de Componentes</Typography>
            <Box sx={{
                width: "500px",
                height: "200px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                backgroundColor: "violet"
            }}>
                <Box sx={{
                    width: "250px",
                    height: "200px",
                    backgroundColor: "turquoise"
                }}>
                    <Box sx={{
                        width: "250px",
                        height: "100px",
                        backgroundColor: "tomato"
                    }}>
                        <Box sx={{
                            width: "250px",
                            height: "100px",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                            backgroundColor: "teal"
                        }}>
                            <Box sx={{
                                width: "125px",
                                height: "100px",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                                backgroundColor: "tan"
                            }}>
                                <Box sx={{
                                    width: "100%",
                                    height: "50%",
                                    backgroundColor: "steelblue"
                                }}></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>




            <Typography>Nuevecitoo de Paqueteee</Typography>
            <Box sx={{
                width: "700px",
                height: "350px",
                display: "flex",
                backgroundColor: "steelblue",
                display: "flex",
                textAlign: "justify",
            }}>
                <Box sx={{
                    width: "350px",
                    height: "350px",
                    display: "flex",
                    backgroundColor: "tomato",
                    alignItems: "end"
                }}
                >
                    <Box sx={{
                        width: "350px",
                        height: "175px",
                        backgroundColor: "thistle",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: "175px",
                            height: "175px",
                            backgroundColor: "skyblue"
                        }}>
                            <Box sx={{
                                width: "175px",
                                height: "88px",
                                display: "flex",
                                backgroundColor: "sandybrown"
                            }}>
                                <Box sx={{
                                    width: "175px",
                                    height: "44px",
                                    backgroundColor: "plum"
                                }}>
                                    <Box sx={{
                                        width: "175px",
                                        height: "22px",
                                        backgroundColor: "slateblue"
                                    }}></Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Typography sx={{
                    width: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>Este es el texto que se va a ver</Typography>
            </Box>
        </Box>
    )
}

export default EjericiosDeComponentes