# Landing Page - Profesor Carlos G. Patiño

Una landing page profesional y moderna para el Profesor Carlos G. Patiño, especializado en asesorías académicas y clases particulares a domicilio.

## 🎯 Características Principales

### ✅ Diseño y UX
- **Diseño Responsivo**: Perfecto en desktop, tablet y móvil
- **Hero Section Impactante**: Con gradientes modernos y call-to-actions claros
- **Animaciones Suaves**: Usando AOS (Animate On Scroll) y animaciones CSS personalizadas
- **Colores Profesionales**: Paleta azul corporativa con acentos dorados

### 📚 Secciones Incluidas
1. **Hero Section**: Presentación impactante del profesor
2. **Beneficios**: Por qué elegir las asesorías del profesor
3. **Materias**: Lista organizada de todas las materias que enseña
4. **Experiencia**: Más de 30 años acompañando estudiantes de PUJ, San Buenaventura, Icesi, UAO y Univalle
5. **Precios**: 3 paquetes de precios flexibles
6. **Contacto**: Formulario completo e información de contacto

### 🎓 Materias Cubiertas
- Matemáticas
- Física
- Termodinámica
- Electromagnetismo
- Cálculo (Diferencial, Integral, Vectorial)
- Estadística
- Álgebra Lineal
- Matemáticas Financieras
- Investigación de Operaciones

### 🛠 Tecnologías Utilizadas
- **HTML5**: Estructura semántica y accesible
- **Tailwind CSS**: Framework de CSS utilitario
- **CSS3 Personalizado**: Estilos adicionales y animaciones
- **JavaScript ES6+**: Interactividad y funcionalidad
- **Font Awesome**: Iconografía profesional
- **AOS Library**: Animaciones al scroll

### 📱 Funcionalidades Interactivas
- **Scroll Suave**: Navegación fluida entre secciones
- **Validación de Formularios**: Validación en tiempo real
- **Botón WhatsApp Flotante**: Acceso directo con mensaje predefinido
- **Animaciones de Hover**: Efectos visuales en cards y botones
- **Notificaciones**: Sistema de notificaciones para feedback
- **Responsividad Completa**: Adaptado a todos los dispositivos

### 💳 Planes de Precios
1. **Clase Individual**: $45.000/clase
   - Clase personalizada de 1 hora
   - Material de apoyo incluido
   - Ejercicios de práctica
   - Seguimiento del progreso

2. **Paquete Mensual** (MÁS POPULAR): $160.000/mes
   - 4 clases personalizadas
   - Material especializado
   - Evaluaciones periódicas
   - Apoyo vía WhatsApp
   - Horarios flexibles

3. **Preparación Intensiva**: $280.000/mes
   - 8 clases personalizadas
   - Material especializado
   - Simulacros de exámenes
   - Apoyo 24/7 vía WhatsApp
   - Garantía de mejora

### 📞 Información de Contacto
- **Teléfono/WhatsApp**: 310 442 61 89
- **Email**: profecarlos757@gmail.com
- **Horario**: Lunes a Domingo: 8:00 AM - 8:00 PM
- **Cobertura**: Cali y municipios aledaños (Jamundí, Yumbo, Palmira, Candelaria). Online para todo el mundo hispano.

## 🚀 Cómo usar

### Instalación y despliegue
Esta landing se publica automáticamente en GitHub Pages desde la rama `main` y está disponible en el dominio personalizado:

- Sitio: https://profecarpa.works/

Para ejecutarla localmente:
1. Descargar todos los archivos
2. Abrir `index.html` en un navegador web
3. ¡Listo! No requiere servidor

### Estructura de Archivos
```
landing-page/
│
├── index.html        # Página principal (HTML + SEO + JSON-LD)
├── styles.css        # CSS personalizado
├── script.js         # JavaScript para interactividad y validación
├── CNAME             # Dominio personalizado (profecarpa.works)
├── robots.txt        # Instrucciones para bots (incluye Sitemap)
├── sitemap.xml       # Mapa del sitio
├── site.webmanifest  # PWA básico (icono, tema)
├── 404.html          # Página 404 para rutas inválidas
├── .nojekyll         # Desactiva Jekyll en GitHub Pages
└── README.md         # Esta documentación
```

### Personalización
Para personalizar la página:

1. **Cambiar información del profesor**: Editar el archivo `index.html`
2. **Modificar colores**: Ajustar las clases de Tailwind o el CSS personalizado
3. **Agregar materias**: Añadir nuevas tarjetas en la sección "Materias"
4. **Actualizar experiencia**: Ajustar universidades o años de experiencia
5. **Cambiar precios**: Actualizar la sección de precios

### Integración WhatsApp
El botón de WhatsApp está configurado para enviar un mensaje predefinido:
```javascript
const whatsappMessage = `Hola profesor Carlos! 
📚 Solicitud de asesoría académica
👤 Nombre: ${name}
📞 Teléfono: ${phone}
📧 Email: ${email}
📖 Materia: ${subject}
💬 Mensaje: ${message}
Espero tu respuesta. ¡Gracias!`;
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Azul (#1e40af, #3b82f6)
- **Secundario**: Azul claro (#3b82f6)
- **Acento**: Dorado (#f59e0b)
- **Texto**: Grises (#374151, #6b7280)
- **Fondo**: Blancos y grises suaves

### Tipografía
- **Títulos**: Font weight bold, tamaños responsivos
- **Subtítulos**: Font weight semibold
- **Texto corriente**: Font weight normal
- **CTAs**: Font weight semibold/bold

### Efectos Visuales
- **Gradientes**: En hero, botones y cards especiales
- **Sombras**: Múltiples niveles para profundidad
- **Blur Effects**: Para elementos decorativos
- **Transform Effects**: Hover y animaciones de interacción

## 📱 Responsividad

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### Adaptaciones Móviles
- Navegación simplificada
- Botones más grandes para touch
- Texto optimizado para pantallas pequeñas
- Grid layouts adaptados
- Espaciado ajustado

## 🔧 Optimizaciones

### Performance
- CSS y JavaScript minificados en producción
- Lazy loading de imágenes (preparado)
- Animaciones optimizadas con GPU
- Scroll suave nativo del navegador

### SEO y Dominio
- Meta tags optimizados (title, description, canonical, Open Graph y Twitter)
- Estructura HTML semántica
- JSON-LD: `Person` y `FAQPage` para resultados enriquecidos
- `robots.txt` con referencia a `sitemap.xml`
- Dominio personalizado con CNAME: `profecarpa.works`
- HTTPS forzado una vez emitido el certificado en GitHub Pages

### Accesibilidad
- Contraste de colores AAA
- Navegación por teclado
- ARIA labels donde necesario
- Focus indicators visibles

## 📈 Conversión y Marketing

### CTAs (Calls to Action)
- **Primarios**: "Solicitar Asesoría", "¡Empezar Ahora!"
- **Secundarios**: Botones de teléfono y WhatsApp
- **Posicionamiento**: Estratégicamente ubicados en cada sección

### Social Proof
- 5 testimonios detallados con nombres y contexto
- Estrellas de 5/5 en todos los testimonios
- Variedad de niveles educativos representados

### Urgencia y Escasez
- "Primera clase GRATIS"
- "MÁS POPULAR" en el paquete principal
- "Respuesta en menos de 2 horas"

## 🔄 Actualizaciones Futuras

### Funcionalidades Propuestas
- [ ] Blog de consejos académicos
- [ ] Calendario de disponibilidad
- [ ] Sistema de pagos online
- [ ] Portal del estudiante
- [ ] Recursos descargables
- [ ] Videos introductorios
- [ ] Chat en vivo
- [ ] Sistema de calificaciones

### Mejoras Técnicas
- [ ] Progressive Web App (PWA)
- [ ] Optimización de imágenes WebP
- [ ] Cache strategies
- [ ] Analytics integration
- [ ] A/B testing setup

## 📞 Soporte

Para soporte técnico o modificaciones, contactar al desarrollador.

### Información del Proyecto
- **Versión**: 1.0.0
- **Fecha de Creación**: Septiembre 2025
- **Tecnologías**: HTML5, CSS3, JavaScript ES6+, Tailwind CSS
- **Compatibilidad**: Todos los navegadores modernos
- **Licencia**: Uso comercial autorizado para Profesor Carlos G. Patiño

---

**Desarrollado con ❤️ para transformar la educación**

🎓 **Profesor Carlos G. Patiño**  
📱 WhatsApp: 310 442 61 89  
📧 Email: profecarlos757@gmail.com