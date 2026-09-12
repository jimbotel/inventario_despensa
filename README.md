# Inventario Despensa

Aplicación web para gestionar el inventario completo de artículos en nevera y/o despensa de una vivienda.
Diseñada para ser reutilizable como sistema de inventario genérico (ej: almacén de mercancías).

## Estructura del proyecto

El proyecto se desarrolla en tres fases secuenciales, cada una con su propio directorio:

### Fase 1 — Validación de Negocio (`fase-1-validacion-negocio/`)
Trabajo con el **Asesor de Negocio/Mentor** para validar hipótesis de mercado.

| Subdirectorio | Contenido |
|---|---|
| `01-propuesta-de-valor/` | Cuadrante de la Propuesta de Valor / Frase de la propuesta de valor |
| `02-lean-canvas-y-validacion/` | Lean Canvas / Entrevistas de problema / MVP |
| `03-historias-de-usuario/` | Historias de usuario iniciales |
| `04-requisitos-de-negocio/` | Traducción de historias de usuario a requisitos de negocio |
| `05-atributos-de-calidad/` | Definición de atributos de calidad iniciales |

### Fase 2 — Arquitectura de Soluciones (`fase-2-arquitectura/`)
Trabajo con el **Arquitecto de Soluciones TI** para traducir necesidades de negocio en diseño técnico.

| Subdirectorio | Contenido |
|---|---|
| `01-vision-y-alcance/` | Descripción del reto / Diagrama de Contexto |
| `02-requisitos-y-datos/` | Casos de uso / Requisitos funcionales y no funcionales / Modelo de datos |
| `03-arquitectura-del-sistema/` | Vistas de arquitectura / ADRs / Modelo de componentes e infraestructura |
| `04-riesgos-y-organizacion/` | RAID / Matriz RACI |

### Fase 3 — Producto (`fase-3-producto/`)
Trabajo con el **Product Manager** para asegurar la construcción del producto correcto.

| Subdirectorio | Contenido |
|---|---|
| `01-backlog-y-user-stories/` | Historias de usuario detalladas / Priorización continua |
| `02-ux-ui/` | Diseño centrado en el cliente (UX/UI) |
| `03-metodologia-de-trabajo/` | Scrum/Kanban / Garantía de calidad (QA) |
| `04-lanzamiento-y-medicion/` | Estrategia de despliegue / Product Analytics |

## Modos custom de Bob

| Fase | Modo Bob |
|---|---|
| Fase 1 | `asesor-negocio-mentor` |
| Fase 1 (MVP) + Fase 2 | `arquitecto-soluciones-ti` |
| Fase 3 | `product-manager` |

## Convenciones

- Los diagramas se generan en **draw.io** siempre que sea posible.
- Se hace **commit** tras cada cambio significativo con un comentario descriptivo.
- Se mantiene un **CHANGELOG.md** con el historial de cambios.
- Los logs internos del asistente se escriben en `internal-monologue/`.
