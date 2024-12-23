import React, { useState } from "react";
import "./pruebas.css";

const Pruebas = () => {
    const [tipoConversion, setTipoConversion] = useState("");
    const [unidadOrigen, setUnidadOrigen] = useState("");
    const [unidadDestino, setUnidadDestino] = useState("");
    const [valor, setValor] = useState(0);
    const [resultado, setResultado] = useState("");
    const [verificador, setVerificador] = useState(false);


    // Datos de todas las conversiones
    const conversiones = {
        longitud: {
            metros: { centimetros: (v) => v * 100, pulgadas: (v) => v * 39.3701, pies: (v) => v * 3.28084, yardas: (v) => v * 1.09361, millas: (v) => v * 0.000621371, millasNauticas: (v) => v * 0.000539957, kilometros: (v) => v / 1000, metros: (v) => v, micrometros: (v) => v * 1e6, nanometros: (v) => v * 1e9, milimetros: (v) => v * 100, decimetros: (v) => v * 10, decametros: (v) => v / 10, hectometros: (v) => v / 100, gigametros: (v) => v / 1e9, terametros: (v) => v / 1e12, petametros: (v) => v / 1e15, exametros: (v) => v / 1e18, zettametros: (v) => v / 1e21, yottametros: (v) => v / 1e24 },

            centimetros: { centimetros: (v) => v, metros: (v) => v / 100, pulgadas: (v) => v / 2.54, pies: (v) => v / 30.48, yardas: (v) => v / 91.44, millas: (v) => v / 160934, millasNauticas: (v) => v / 185200, kilometros: (v) => v / 100000, micrometros: (v) => v * 10000, nanometros: (v) => v * 1e7, milimetros: (v) => v * 10, decimetros: (v) => v / 10, decametros: (v) => v / 100, hectometros: (v) => v / 10000, gigametros: (v) => v / 1e8, terametros: (v) => v / 1e11, petametros: (v) => v / 1e14, exametros: (v) => v / 1e17, zettametros: (v) => v / 1e20, yottametros: (v) => v / 1e23 },

            pulgadas: { pulgadas: (v) => v, metros: (v) => v / 39.3701, centimetros: (v) => v * 2.54, pies: (v) => v / 12, yardas: (v) => v / 36, millas: (v) => v / 63360, millasNauticas: (v) => v / 72913.4, kilometros: (v) => v / 39370.1, micrometros: (v) => v * 25400, nanometros: (v) => v * 2.54e7, milimetros: (v) => v * 25.4, decimetros: (v) => v * 2.54, decametros: (v) => v / 39370.1, hectometros: (v) => v / 393701, gigametros: (v) => v / 3.93701e8, terametros: (v) => v / 3.93701e11, petametros: (v) => v / 3.93701e14, exametros: (v) => v / 3.93701e17, zettametros: (v) => v / 3.93701e20, yottametros: (v) => v / 3.93701e23 },

            pies: { pies: (v) => v, metros: (v) => v / 3.28084, centimetros: (v) => v * 30.48, pulgadas: (v) => v * 12, yardas: (v) => v / 3, millas: (v) => v / 5280, millasNauticas: (v) => v / 6076.12, kilometros: (v) => v / 3280.84, micrometros: (v) => v * 304800, nanometros: (v) => v * 3.048e8, milimetros: (v) => v * 304.8, decimetros: (v) => v * 3.048, decametros: (v) => v / 3280.84, hectometros: (v) => v / 32808.4, gigametros: (v) => v / 3.28084e7, terametros: (v) => v / 3.28084e10, petametros: (v) => v / 3.28084e13, exametros: (v) => v / 3.28084e16, zettametros: (v) => v / 3.28084e19, yottametros: (v) => v / 3.28084e22 },

            yardas: { yardas: (v) => v, metros: (v) => v / 1.09361, centimetros: (v) => v * 91.44, pulgadas: (v) => v * 36, pies: (v) => v * 3, millas: (v) => v / 1760, millasNauticas: (v) => v / 2025.37, kilometros: (v) => v / 1093.61, micrometros: (v) => v * 914400, nanometros: (v) => v * 9.144e8, milimetros: (v) => v * 914.4, decimetros: (v) => v * 9.144, decametros: (v) => v / 1093.61, hectometros: (v) => v / 10936.1, gigametros: (v) => v / 1.09361e7, terametros: (v) => v / 1.09361e10, petametros: (v) => v / 1.09361e13, exametros: (v) => v / 1.09361e16, zettametros: (v) => v / 1.09361e19, yottametros: (v) => v / 1.09361e22 },

            millas: { millas: (v) => v, metros: (v) => v / 0.000621371, centimetros: (v) => v * 160934, pulgadas: (v) => v * 63360, pies: (v) => v * 5280, yardas: (v) => v * 1760, millasNauticas: (v) => v / 1.15078, kilometros: (v) => v * 1.60934, micrometros: (v) => v * 1.609e6, nanometros: (v) => v * 1.609e9, milimetros: (v) => v * 1609344, decimetros: (v) => v * 160934.4, decametros: (v) => v / 1609.34, hectometros: (v) => v / 16093.4, gigametros: (v) => v / 1.60934e6, terametros: (v) => v / 1.60934e9, petametros: (v) => v / 1.60934e12, exametros: (v) => v / 1.60934e15, zettametros: (v) => v / 1.60934e18, yottametros: (v) => v / 1.60934e21 },

            millasNauticas: { millasNauticas: (v) => v, metros: (v) => v / 0.000539957, centimetros: (v) => v * 185200, pulgadas: (v) => v * 72913.4, pies: (v) => v * 6076.12, yardas: (v) => v * 2025.37, millas: (v) => v * 1.15078, kilometros: (v) => v * 1.852, micrometros: (v) => v * 1.852e6, nanometros: (v) => v * 1.852e9, milimetros: (v) => v * 1852000, decimetros: (v) => v * 185200, decametros: (v) => v / 1852, hectometros: (v) => v / 18520, gigametros: (v) => v / 1.852e6, terametros: (v) => v / 1.852e9, petametros: (v) => v / 1.852e12, exametros: (v) => v / 1.852e15, zettametros: (v) => v / 1.852e18, yottametros: (v) => v / 1.852e21 },

            kilometros: { kilometros: (v) => v, metros: (v) => v * 1000, centimetros: (v) => v * 100000, pulgadas: (v) => v * 39370.1, pies: (v) => v * 3280.84, yardas: (v) => v * 1093.61, millas: (v) => v / 1.60934, millasNauticas: (v) => v / 1.852, micrometros: (v) => v * 1e6, nanometros: (v) => v * 1e9, milimetros: (v) => v * 1e6, decimetros: (v) => v * 1e5, decametros: (v) => v * 100, hectometros: (v) => v / 10, gigametros: (v) => v / 1e6, terametros: (v) => v / 1e9, petametros: (v) => v / 1e12, exametros: (v) => v / 1e15, zettametros: (v) => v / 1e18, yottametros: (v) => v / 1e21 },

            micrometros: { micrometros: (v) => v, metros: (v) => v / 1e6, centimetros: (v) => v / 10000, pulgadas: (v) => v / 25400, pies: (v) => v / 304800, yardas: (v) => v / 914400, millas: (v) => v / 1.609e6, millasNauticas: (v) => v / 1.852e6, kilometros: (v) => v / 1e6, nanometros: (v) => v * 1000, milimetros: (v) => v / 1000, decimetros: (v) => v / 1e5, decametros: (v) => v / 1e6, hectometros: (v) => v / 1e7, gigametros: (v) => v / 1e12, terametros: (v) => v / 1e15, petametros: (v) => v / 1e18, exametros: (v) => v / 1e21, zettametros: (v) => v / 1e24, yottametros: (v) => v / 1e27 },

            nanometros: { nanometros: (v) => v, metros: (v) => v / 1e9, centimetros: (v) => v / 1e7, pulgadas: (v) => v / 2.54e7, pies: (v) => v / 3.048e8, yardas: (v) => v / 9.144e8, millas: (v) => v / 1.609e9, millasNauticas: (v) => v / 1.852e9, kilometros: (v) => v / 1e9, micrometros: (v) => v * 1000, milimetros: (v) => v / 1e6, decimetros: (v) => v / 1e8, decametros: (v) => v / 1e9, hectometros: (v) => v / 1e10, gigametros: (v) => v / 1e15, terametros: (v) => v / 1e18, petametros: (v) => v / 1e21, exametros: (v) => v / 1e24, zettametros: (v) => v / 1e27, yottametros: (v) => v / 1e30 },

            milimetros: { milimetros: (v) => v, metros: (v) => v / 1000, centimetros: (v) => v / 10, pulgadas: (v) => v / 25.4, pies: (v) => v / 304.8, yardas: (v) => v / 914.4, millas: (v) => v / 1609344, millasNauticas: (v) => v / 1852000, kilometros: (v) => v / 1e6, micrometros: (v) => v * 1000, nanometros: (v) => v * 1e6, decimetros: (v) => v / 100, decametros: (v) => v / 1000, hectometros: (v) => v / 10000, gigametros: (v) => v / 1e9, terametros: (v) => v / 1e12, petametros: (v) => v / 1e15, exametros: (v) => v / 1e18, zettametros: (v) => v / 1e21, yottametros: (v) => v / 1e24 },

            decimetros: { decimetros: (v) => v, metros: (v) => v / 10, centimetros: (v) => v * 10, pulgadas: (v) => v * 3.93701, pies: (v) => v * 0.328084, yardas: (v) => v * 0.109361, millas: (v) => v / 160934, millasNauticas: (v) => v / 185200, kilometros: (v) => v / 10000, micrometros: (v) => v * 1e5, nanometros: (v) => v * 1e8, milimetros: (v) => v * 100, decametros: (v) => v / 10, hectometros: (v) => v / 100, gigametros: (v) => v / 1e8, terametros: (v) => v / 1e11, petametros: (v) => v / 1e14, exametros: (v) => v / 1e17, zettametros: (v) => v / 1e20, yottametros: (v) => v / 1e23 },

            decametros: { decametros: (v) => v, metros: (v) => v * 10, centimetros: (v) => v * 1000, pulgadas: (v) => v * 393.701, pies: (v) => v * 32.8084, yardas: (v) => v * 10.9361, millas: (v) => v / 16093.4, millasNauticas: (v) => v / 18520, kilometros: (v) => v / 100, micrometros: (v) => v * 1e6, nanometros: (v) => v * 1e9, milimetros: (v) => v * 10000, decimetros: (v) => v * 10, hectometros: (v) => v / 10, gigametros: (v) => v / 1e7, terametros: (v) => v / 1e10, petametros: (v) => v / 1e13, exametros: (v) => v / 1e16, zettametros: (v) => v / 1e19, yottametros: (v) => v / 1e22 },

            hectometros: { hectometros: (v) => v, metros: (v) => v * 100, centimetros: (v) => v * 10000, pulgadas: (v) => v * 3937.01, pies: (v) => v * 328.084, yardas: (v) => v * 109.361, millas: (v) => v / 160934, millasNauticas: (v) => v / 185200, kilometros: (v) => v / 100, micrometros: (v) => v * 1e7, nanometros: (v) => v * 1e10, milimetros: (v) => v * 100000, decimetros: (v) => v * 100, decametros: (v) => v * 10, gigametros: (v) => v / 1e6, terametros: (v) => v / 1e9, petametros: (v) => v / 1e12, exametros: (v) => v / 1e15, zettametros: (v) => v / 1e18, yottametros: (v) => v / 1e21 },

            gigametros: { gigametros: (v) => v, metros: (v) => v * 1e9, centimetros: (v) => v * 1e11, pulgadas: (v) => v * 3.93701e10, pies: (v) => v * 3.28084e9, yardas: (v) => v * 1.09361e9, millas: (v) => v / 1.60934e6, millasNauticas: (v) => v / 1.852e6, kilometros: (v) => v / 1e6, micrometros: (v) => v * 1e15, nanometros: (v) => v * 1e18, milimetros: (v) => v * 1e12, decimetros: (v) => v * 1e8, decametros: (v) => v * 1e7, hectometros: (v) => v * 1e6, terametros: (v) => v / 1000, petametros: (v) => v / 1e3, exametros: (v) => v / 1e6, zettametros: (v) => v / 1e9, yottametros: (v) => v / 1e12 },

            terametros: { terametros: (v) => v, metros: (v) => v * 1e12, centimetros: (v) => v * 1e14, pulgadas: (v) => v * 3.93701e11, pies: (v) => v * 3.28084e10, yardas: (v) => v * 1.09361e10, millas: (v) => v / 1.60934e6, millasNauticas: (v) => v / 1.852e6, kilometros: (v) => v / 1e6, micrometros: (v) => v * 1e18, nanometros: (v) => v * 1e21, milimetros: (v) => v * 1e15, decimetros: (v) => v * 1e11, decametros: (v) => v * 1e10, hectometros: (v) => v * 1e9, gigametros: (v) => v * 1000, petametros: (v) => v / 1000, exametros: (v) => v / 1e3, zettametros: (v) => v / 1e6, yottametros: (v) => v / 1e9 },

            petametros: { petametros: (v) => v, metros: (v) => v * 1e15, centimetros: (v) => v * 1e17, pulgadas: (v) => v * 3.93701e12, pies: (v) => v * 3.28084e12, yardas: (v) => v * 1.09361e12, millas: (v) => v / 1.60934e9, millasNauticas: (v) => v / 1.852e9, kilometros: (v) => v / 1e6, micrometros: (v) => v * 1e21, nanometros: (v) => v * 1e24, milimetros: (v) => v * 1e18, decimetros: (v) => v * 1e14, decametros: (v) => v * 1e13, hectometros: (v) => v * 1e12, gigametros: (v) => v * 1000, terametros: (v) => v * 1000, exametros: (v) => v / 1000, zettametros: (v) => v / 1e3, yottametros: (v) => v / 1e6 },

            exametros: { exametros: (v) => v, metros: (v) => v * 1e18, centimetros: (v) => v * 1e20, pulgadas: (v) => v * 3.93701e15, pies: (v) => v * 3.28084e15, yardas: (v) => v * 1.09361e15, millas: (v) => v / 1.60934e12, millasNauticas: (v) => v / 1.852e12, kilometros: (v) => v / 1e6, micrometros: (v) => v * 1e24, nanometros: (v) => v * 1e27, milimetros: (v) => v * 1e21, decimetros: (v) => v * 1e17, decametros: (v) => v * 1e16, hectometros: (v) => v * 1e15, gigametros: (v) => v * 1e6, terametros: (v) => v * 1000, petametros: (v) => v * 1000, zettametros: (v) => v / 1000, yottametros: (v) => v / 1e6 },

            zettametros: { zettametros: (v) => v, metros: (v) => v * 1e21, centimetros: (v) => v * 1e23, pulgadas: (v) => v * 3.93701e18, pies: (v) => v * 3.28084e18, yardas: (v) => v * 1.09361e18, millas: (v) => v / 1.60934e15, millasNauticas: (v) => v / 1.852e15, kilometros: (v) => v / 1e6, micrometros: (v) => v * 1e27, nanometros: (v) => v * 1e30, milimetros: (v) => v * 1e24, decimetros: (v) => v * 1e20, decametros: (v) => v * 1e19, hectometros: (v) => v * 1e18, gigametros: (v) => v * 1e9, terametros: (v) => v * 1000, petametros: (v) => v * 1000, exametros: (v) => v * 1e6, yottametros: (v) => v / 1000 },

            yottametros: { yottametros: (v) => v, metros: (v) => v * 1e24, centimetros: (v) => v * 1e26, pulgadas: (v) => v * 3.93701e21, pies: (v) => v * 3.28084e21, yardas: (v) => v * 1.09361e21, millas: (v) => v / 1.60934e18, millasNauticas: (v) => v / 1.852e18, kilometros: (v) => v / 1e6, micrometros: (v) => v * 1e30, nanometros: (v) => v * 1e33, milimetros: (v) => v * 1e27, decimetros: (v) => v * 1e23, decametros: (v) => v * 1e22, hectometros: (v) => v * 1e21, gigametros: (v) => v * 1e12, terametros: (v) => v * 1e9, petametros: (v) => v * 1e9, exametros: (v) => v * 1e6, zettametros: (v) => v * 1000 },

        },
        masa: {
            kilogramos: { kilogramos: (v) => v, gramos: (v) => v * 1000, miligramos: (v) => v * 1e6, libras: (v) => v * 2.20462, onzas: (v) => v * 35.274, toneladas: (v) => v / 1000 },
            gramos: { kilogramos: (v) => v / 1000, gramos: (v) => v, miligramos: (v) => v * 1000, libras: (v) => v / 453.592, onzas: (v) => v / 28.3495, toneladas: (v) => v / 1e6 },
            miligramos: { kilogramos: (v) => v / 1e6, gramos: (v) => v / 1000, miligramos: (v) => v, libras: (v) => v / 453592, onzas: (v) => v / 28350, toneladas: (v) => v / 1e9 },
            libras: { kilogramos: (v) => v / 2.20462, gramos: (v) => v * 453.592, miligramos: (v) => v * 453592, libras: (v) => v, onzas: (v) => v * 16, toneladas: (v) => v / 2204.62 },
            onzas: { kilogramos: (v) => v / 35.274, gramos: (v) => v * 28.3495, miligramos: (v) => v * 28350, libras: (v) => v / 16, onzas: (v) => v, toneladas: (v) => v / 35274 },
            toneladas: { kilogramos: (v) => v * 1000, gramos: (v) => v * 1e6, miligramos: (v) => v * 1e9, libras: (v) => v * 2204.62, onzas: (v) => v * 35274, toneladas: (v) => v },
        },
        tiempo: {
            segundos: { segundos: (v) => v, minutos: (v) => v / 60, horas: (v) => v / 3600, dias: (v) => v / 86400, semanas: (v) => v / 604800, meses: (v) => v / 2.628e6, años: (v) => v / 3.154e7 },
            minutos: { segundos: (v) => v * 60, minutos: (v) => v, horas: (v) => v / 60, dias: (v) => v / 1440, semanas: (v) => v / 10080, meses: (v) => v / 43800, años: (v) => v / 525600 },
            horas: { segundos: (v) => v * 3600, minutos: (v) => v * 60, horas: (v) => v, dias: (v) => v / 24, semanas: (v) => v / 168, meses: (v) => v / 730, años: (v) => v / 8760 },
            dias: { segundos: (v) => v * 86400, minutos: (v) => v * 1440, horas: (v) => v * 24, dias: (v) => v, semanas: (v) => v / 7, meses: (v) => v / 30.417, años: (v) => v / 365 },
            semanas: { segundos: (v) => v * 604800, minutos: (v) => v * 10080, horas: (v) => v * 168, dias: (v) => v * 7, semanas: (v) => v, meses: (v) => v / 4.34524, años: (v) => v / 52.1429 },
            meses: { segundos: (v) => v * 2.628e6, minutos: (v) => v * 43800, horas: (v) => v * 730, dias: (v) => v * 30.417, semanas: (v) => v * 4.34524, meses: (v) => v, años: (v) => v / 12 },
            años: { segundos: (v) => v * 3.154e7, minutos: (v) => v * 525600, horas: (v) => v * 8760, dias: (v) => v * 365, semanas: (v) => v * 52.1429, meses: (v) => v * 12, años: (v) => v },
        },
        area: {
            metrosCuadrados: { metrosCuadrados: (v) => v, hectareas: (v) => v / 10000, acres: (v) => v / 4046.86 },
            hectareas: { metrosCuadrados: (v) => v * 10000, hectareas: (v) => v, acres: (v) => v * 2.47105 },
            acres: { metrosCuadrados: (v) => v * 4046.86, hectareas: (v) => v / 2.47105, acres: (v) => v },
        },
        volumen: {
            metrosCubicos: { metrosCubicos: (v) => v, litros: (v) => v * 1000, galones: (v) => v * 264.172 },
            litros: { metrosCubicos: (v) => v / 1000, litros: (v) => v, galones: (v) => v / 3.78541 },
            galones: { metrosCubicos: (v) => v / 264.172, litros: (v) => v * 3.78541, galones: (v) => v },
        },
        angulo: {
            grados: { grados: (v) => v, radianes: (v) => v * (Math.PI / 180) },
            radianes: { grados: (v) => v * (180 / Math.PI), radianes: (v) => v },
        },
        aceleracion: {
            metrosPorSegundoCuadrado: { metrosPorSegundoCuadrado: (v) => v, gravedades: (v) => v / 9.81 },
            gravedades: { metrosPorSegundoCuadrado: (v) => v * 9.81, gravedades: (v) => v },
        },
        fuerza: {
            newtons: { newtons: (v) => v, librasFuerza: (v) => v / 4.44822 },
            librasFuerza: { newtons: (v) => v * 4.44822, librasFuerza: (v) => v },

        },
        energia: {
            joules: { joules: (v) => v, calorias: (v) => v * 4.184 },
            calorias: { joules: (v) => v / 4.184, calorias: (v) => v },

        },
        presion: {
            pascales: { pascales: (v) => v, psi: (v) => v / 6894.76 },
            psi: { pascales: (v) => v * 6894.76, psi: (v) => v },

        },
        potencia: {
            watts: { watts: (v) => v, caballosDeFuerza: (v) => v / 745.7 },
            caballosDeFuerza: { watts: (v) => v * 745.7, caballosDeFuerza: (v) => v },

        },
        temperatura: {
            celsius: {
                fahrenheit: (v) => (v * 9) / 5 + 32,
                kelvin: (v) => v + 273.15,
                celsius: (v) => v,
            },

            fahrenheit: {
                celsius: (v) => ((v - 32) * 5) / 9,
                kelvin: (v) => ((v - 32) * 5) / 9 + 273.15,
                fahrenheit: (v) => v,
            },

            kelvin: {
                celsius: (v) => v - 273.15,
                fahrenheit: (v) => ((v - 273.15) * 9) / 5 + 32,
                kelvin: (v) => v,
            },
        },
    };

    const opcionesUnidades = tipoConversion && Object.keys(conversiones[tipoConversion]);

    const convertirUnidades = () => {
        if (unidadOrigen && unidadDestino && valor > 0) {
            const resultadoConvertido =
                conversiones[tipoConversion]?.[unidadOrigen]?.[unidadDestino]?.(valor) ?? "Conversión inválida";
            setResultado(`${resultadoConvertido} ${unidadDestino}`);
            setVerificador(true);
        } else {
            setResultado("Por favor completa todos los campos");
            setVerificador(false);
        }
    };

    return (
        <div style={{ padding: "20px" }} className="padre">
            <h1 className="t1">Conversor de Unidades</h1>
            <div className="selectorUnidades">
                <select value={tipoConversion} onChange={(e) => setTipoConversion(e.target.value)} className="select">
                    <option value="">medida</option>
                    <option value="longitud">Longitud</option>
                    <option value="masa">Masa</option>
                    <option value="tiempo">Tiempo</option>
                    <option value="area">Área</option>
                    <option value="volumen">Volumen</option>
                    <option value="angulo">Ángulo</option>
                    <option value="aceleracion">Aceleración</option>
                    <option value="fuerza">Fuerza</option>
                    <option value="energia">Energía</option>
                    <option value="presion">Presión</option>
                    <option value="potencia">Potencia</option>
                    <option value="temperatura">Temperatura</option>

                </select>
            </div>

            {tipoConversion && (
                <div className="selectorUnidades2">
                    <div className="cardInterna">
                        <label className="label">Convertir :</label>
                        <select value={unidadOrigen} onChange={(e) => setUnidadOrigen(e.target.value)} className="selectInterno">

                            <option value="" className="selectInterno">Selecciona</option>
                            {opcionesUnidades.map((unidad) => (
                                <option key={unidad} value={unidad}>
                                    {unidad}
                                </option>
                            ))}
                        </select>
                        <div className="campoValor">
                            <input
                                type="text"
                                value={valor}
                                onChange={(e) => {
                                    const entrada = e.target.value;
                                    if (/^[0-9]*\.?[0-9]*$/.test(entrada)) {
                                        setValor(entrada);
                                    }
                                }}
                                className="input"
                            />

                        </div>
                    </div>
                    <div className="cardInterna2">
                        <label className="label">A :</label>
                        <select value={unidadDestino} onChange={(e) => setUnidadDestino(e.target.value)} className="selectInterno">
                            <option value="" className="selectInterno">Selecciona</option>
                            {opcionesUnidades.map((unidad) => (
                                <option key={unidad} value={unidad}>
                                    {unidad}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button onClick={convertirUnidades} className="botonConvertir">Convertir</button>
                </div>
            )}

            {resultado && (
                <div className={verificador ? "resultado" : "resultadoError"}>
                    <h2>{resultado}</h2>
                </div>
            )}


            <a
                href="https://matemovil.com/sistema-internacional-de-unidades-y-conversiones/"
                target="_blank"
            >
                <h3 >APRENDER MAS</h3>
            </a>

        </div>
    );
};

export default Pruebas;
