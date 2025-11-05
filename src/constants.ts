// src/constants.ts
/**
 * 🌌 CONFIGURACIÓN FÍSICA DEL SISTEMA BINARIO TAKBIRU-TAKMAT
 * 
 * Este archivo contiene todos los parámetros físicos del sistema
 * basados en astrofísica real, con tiempo acelerado para visualización.
 */

// ═══════════════════════════════════════════════════════════════
// 🌟 MASAS ESTELARES (en masas solares)
// ═══════════════════════════════════════════════════════════════
export const TAKMAT_MASS = 12.0  // Gigante roja - suficiente para supernova tipo II
export const TAKBIRU_MASS = 1.0  // Enana blanca - acretando masa de Takmat

// Ratio de masas (para cálculo de baricenter)
export const MASS_RATIO = TAKMAT_MASS / TAKBIRU_MASS // 12:1

// ═══════════════════════════════════════════════════════════════
// 🎯 BARICENTER (Centro de Masa)
// ═══════════════════════════════════════════════════════════════
export const BINARY_SEPARATION = 1000  // Separación total entre estrellas

// Distancias al baricenter (ubicado en [0,0,0])
// r1/r2 = M2/M1 (la más masiva está más cerca del centro)
export const TAKMAT_ORBIT_RADIUS = BINARY_SEPARATION / (MASS_RATIO + 1)      // ~77 unidades
export const TAKBIRU_ORBIT_RADIUS = BINARY_SEPARATION * MASS_RATIO / (MASS_RATIO + 1)  // ~923 unidades

// ═══════════════════════════════════════════════════════════════
// ⏱️ PERÍODOS ORBITALES
// ═══════════════════════════════════════════════════════════════
export const BINARY_PERIOD = 90   // segundos - ambas estrellas completan UNA órbita
export const BINARY_ANGULAR_SPEED = (2 * Math.PI) / BINARY_PERIOD  // ~0.0698 rad/s

// ═══════════════════════════════════════════════════════════════
// 🪐 TIÅMÅT (Planeta)
// ═══════════════════════════════════════════════════════════════
export const TIAMAT_ORBIT_RADIUS = 2800  // Órbita estable (> 2.5 × separación binaria)
export const TIAMAT_PERIOD = 240         // segundos
export const TIAMAT_ANGULAR_SPEED = (2 * Math.PI) / TIAMAT_PERIOD  // ~0.0262 rad/s
export const TIAMAT_AXIAL_TILT = (40 * Math.PI) / 180  // 40° en radianes
export const TIAMAT_ROTATION_SPEED = 0.3  // Velocidad de rotación sobre su eje
export const TIAMAT_SIZE = 3

// ═══════════════════════════════════════════════════════════════
// 🎨 TAMAÑOS VISUALES
// ═══════════════════════════════════════════════════════════════
export const TAKMAT_RADIUS = 120   // Gigante roja
export const TAKBIRU_RADIUS = 15   // Enana blanca

// ═══════════════════════════════════════════════════════════════
// 🌊 EXCENTRICIDADES ORBITALES
// ═══════════════════════════════════════════════════════════════
export const BINARY_ECCENTRICITY = 0.2   // Órbitas moderadamente elípticas
export const TIAMAT_ECCENTRICITY = 0.1   // Órbita casi circular

// ═══════════════════════════════════════════════════════════════
// 🎥 CONFIGURACIÓN DE CÁMARA
// ═══════════════════════════════════════════════════════════════
export const CAMERA_POSITION: [number, number, number] = [0, 600, 3500]
export const CAMERA_FOV = 60
export const CAMERA_NEAR = 0.1
export const CAMERA_FAR = 200000  // 🔹 AUMENTADO para ver las estrellas a distancia extrema