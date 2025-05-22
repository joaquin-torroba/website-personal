# Plan de Implementación de Traducciones - Paso 7

Este documento detalla el plan para ejecutar el **Paso 7** del documento `tarea-actual.md`: **Traducción de Contenido Estático**.

## Flujo de trabajo para cada sección:

1. **Preparación**: Revisar los archivos messages/es.json y messages/en.json existentes
2. **Actualización de traducciones**: Añadir/actualizar traducciones basadas en textos-ingles-webpersonal.md
3. **Modificación de componentes**: Usar useTranslations en lugar de texto hardcodeado
4. **Prueba**: Verificar textos en ambos idiomas y funcionalidad del switch

## Orden de implementación:

1. **Metadatos Globales** (HomePage - title, description)
2. **LanguageSwitcher** (Languages - textos ya implementados)
3. **Navegación Fija** (HomePage - emailButton, linkedInButton)
4. **HeroSection** (HomePage/HeroSection - greeting, name, taglines)
5. **AboutSection** (AboutSection - title, paragraphs)
6. **RecorridoSection** (RecorridoSection/TimelineSection - títulos, descripciones)
7. **Proyectos** (ProjectsSection - todos los proyectos por categoría)
8. **SkillsSection** (SkillsSection - títulos, categorías)
9. **ContactSection** (ContactSection - título, botones)

## Metodología de Trabajo:

- Cada sección se implementará **únicamente** después de recibir la instrucción "GO"
- Después de cada sección implementada, se realizará:
  - Commit específico para esa sección
  - Prueba de la funcionalidad en ambos idiomas
  - Verificación de que no se rompió nada existente

## Estado de Implementación:

- ✅ 1. Metadatos Globales
- ✅ 2. LanguageSwitcher
- ✅ 3. Navegación Fija
- ⚪ 4. HeroSection
- ⚪ 5. AboutSection
- ⚪ 6. RecorridoSection
- ⚪ 7. Proyectos
- ⚪ 8. SkillsSection
- ✅ 9. ContactSection 