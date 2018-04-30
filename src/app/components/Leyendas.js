import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Leyendas extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            flag:0
        }
    }

    handleClick (data) {
        if (data === 'show') { 
            this.setState({ flag:1});
        } else if (data === 'close') {
            this.setState({ flag:0});
        }
    }

    render() {
        const divStyle = {
            height:window.innerHeight,
            width:'90%',
            background: 'white',
            float:'left'
        };
    return (
        <div>
            <div id="divPopup" className={`popUp ${this.state.flag === 0 ? 'hideDiv': ''}`}>
                <div className="close-popup" onClick={() => this.handleClick('close')}>Cerrar</div>
                <div style = { divStyle }>
                <h2>Aviso de Privacidad</h2>
<p>
PEUGEOT MÉXICO, S.A. DE C.V. (en adelante, “PEUGEOT”), con domicilio en Av. Insurgentes Sur N° 1898,2ndo piso, Colonia Florida, C.P. 01030, Delegación Álvaro Obregón, Ciudad de México, México, , mismo que señala para todos los efectos legales derivados del manejo de la información proporcionada a través del sitio web www.peugeot.com.mx, de nuestra aplicación ‘My Peugeot App’ y demás sitios web propiedad de PEUGEOT (en adelante, conjuntamente “el SITIO”,  según corresponda), en cumplimiento con la ‘Ley Federal de Protección de Datos Personales en Posesión de los Particulares’ (en adelante ”LA LEY”) y demás normatividad vigente y aplicable, pone a su disposición el presente:<br />

AVISO DE PRIVACIDAD

Este Aviso de Privacidad rige el tratamiento que PEUGEOT dará a los datos personales que nos proporcione a través del SITIO, o como consecuencia del uso que haga de los mismos. Por esto, le pedimos lea este Aviso de Privacidad con detenimiento, y si no está de acuerdo con parte o la totalidad de este documento, le pedimos no utilice el SITIO y evite proporcionar cualquier dato personal. El hacer uso del SITIO y el proporcionar datos personales significa que ha leído y está de acuerdo con el tratamiento que se dará a sus datos personales de conformidad con lo establecido en este Aviso de Privacidad. Para PEUGEOT la confidencialidad y seguridad en el resguardo y tratamiento de sus datos personales es una prioridad; razón por la cual usted puede tener la certeza de que los mismos serán manejados en forma confidencial y de acuerdo con la legislación conducente en vigor.

Datos que se recaban

Se entiende que los datos personales que usted proporciona en este SITIO, a través de los formatos de registro que PEUGEOT pone a su disposición, a través de ‘My Peugeot App’, así como cuando nos envía un correo electrónico con preguntas o comentarios o nos contacta vía telefónica o por cualquier otro medio, son comunicados por el Titular de los datos, usted, de forma libre y voluntaria (en adelante, “usted” o “el Titular”). A través del SITIO o derivado del uso que haga de los mismos, PEUGEOT podrá recabar datos personales que pertenezcan a la categoría de identificación y contacto. El Titular declara que los Datos Personales de contacto y/o de identificación proporcionados en el SITIO (nombre, edad, sexo, ocupación, domicilio, correo electrónico, número telefónico (del domicilio y/o portátil /celular)) son veraces y comprobables, y acepta que será responsable de informar a “PEUGEOT” de cualquier modificación trascendental en los mismos.

 Finalidades o usos de los datos personales

El uso y destino de la información por Ud. proporcionada en el SITIO estará limitado al cumplimiento de las siguientes finalidades necesarias: (i) proveerle el bien y/o a suministrarle el servicio, ambos referentes a los productos de la Marca PEUGEOT y/o directamente relacionados (en adelante, “LOS PRODUCTOS”) (tales como el programar una cita, programar una prueba de manejo); (ii) responder a sus consultas y/o proporcionarle la información que solicite,(iii) dar seguimiento a nuestra relación comercial, (iv) hacer efectivas las garantías de los PRODUCTOS, (v) enviarle comunicaciones relacionadas con los PRODUCTOS que haya adquirido (vi) cumplir con obligaciones legales y requerimientos de autoridad competente, (vi) proteger o defender los derechos y propiedad de PEUGEOT y de otras empresas del grupo, así como la información confidencial de éstas, (vii) mantener la seguridad del SITIO, de PEUGEOT y de los usuarios y clientes de PEUGEOT, (viii) prevenir y/o cooperar en la investigación de conductas delictivas e ilícitas (ix) enviarle comunicados para proporcionarle la información de identificación y contacto de distribuidores autorizados de PEUGEOT dentro del territorio nacional; o bien, para informarle quiénes han dejado de ser distribuidores autorizados, (x) enviarle un correo o mensaje confirmando su registro, o proporcionándole la opción de reestablecer su contraseña con relación a ‘My Peugeot App’ o cualquier perfil que cree en el SITIO, (xi) gestionar su solicitud con algún miembro de la red comercial PEUGEOT (concesionarios, distribuidores, agentes).

Asimismo, siempre que usted no se oponga, o si se suscribe a ciertos servicios proporcionados a través del SITIO, sus datos personales podrán ser utilizados para dar cumplimiento a las siguientes finalidades voluntarias que no son necesarias pero nos permiten y facilitan brindarle una mejor atención: (i) realizar encuestas sobre nuestros productos y servicios prestados por la Red de Distribuidores “PEUGEOT”; (ii) comunicarle nuestras promociones y eventos, mercadotecnia y publicidad; (iii) medición de índices de satisfacción del cliente y de la calidad de LOS PRODUCTOS, (iv) enviarle Newsletters de PEUGEOT, (v) participar en promociones.

 En caso de que no desee que sus datos personales sean tratados para las finalidades voluntarias, desde este momento nos puede comunicar lo anterior, mediante el envío de una solicitud en los términos que se señalan en el apartado “Derechos del Titular” de este Aviso de Privacidad.

Uso de tecnologías de seguimiento

Nuestro SITIO de Internet obtiene automáticamente información acerca de su conducta cuando navega por el SITIO, a través de "cookies". Una cookie es un pequeño archivo de texto que algunos sitios web escriben en el disco duro de su computadora cuando los visita. Un archivo cookie se utiliza para rastrear las páginas que usted ha visitado, el tiempo que pasa en el SITIO, optimizar y personalizar la navegación, pero la única información personal que una cookie puede contener es información que usted mismo suministra. Una cookie no puede leer datos de su disco duro, ni leer los archivos cookie creados por otros sitios. PEUGEOT utiliza cookies sólo para rastrear los patrones de tráfico del usuario cuando navega por ciertas páginas del SITIO. Si usted ha ajustado su navegador para que le avise antes de aceptar cookies, recibirá el mensaje de advertencia con cada cookie. Usted puede rehusar recibir cookies, desactivándolos en su navegador. Si usted rehúsa las cookies, existe la posibilidad de que no tenga acceso a ciertos servicios brindados por el sitio. Puede eliminar o desactivar cookies a través de la configuración de su navegador. Para cada navegador debe seguirse un procedimiento diferente; sin embargo, a manera de ejemplo, si utiliza Google Chrome, deberá seguir esta ruta: Configuración -> Mostrar opciones avanzadas -> Privacidad -> Configuración de contenido. Para más información o para saber cómo deshabilitar las cookies en otros navegadores, consulte el sitio: www.allaboutcookies.org/es/.

Tome en cuenta que algunas de estas tecnologías pueden transmitir directamente su información a terceros ajenos que se rigen por otro Aviso de Privacidad. Por ejemplo, los botones que llevan a diferentes redes sociales transmiten la información directamente a estas empresas, por lo que recomendamos lea el Aviso de Privacidad de estas empresas, ya que PEUGEOT no es responsable del tratamiento de datos personales que dichas empresas lleven a cabo.

Enlaces a otros sitios web

El SITIO puede contener enlaces a otros sitios que pueden ser de su interés pero que no pertenecen a PEUGEOT; por tanto, PEUGEOT no se responsabiliza por los procedimientos, ni mecanismos de seguridad de aquellos otros sitios web a los cuales se puede acceder, ya que son independientes y ajenos a PEUGEOT; por esta razón, recomendamos la lectura detenida del Aviso de Privacidad de cada uno de ellos.

 El SITIO puede igualmente contener enlaces a otros sitios propiedad de PEUGEOT; sin embargo, puede ser que estos sitios tengan su propio Aviso de Privacidad, como en el caso de PEUGEOT ADVISOR, por lo que le alentamos a consultar el Aviso de Privacidad disponible en cada sitio que visite.

 Comunicaciones de Datos Personales

La información que ha decidido compartir con nosotros podrá ser comunicada dentro y fuera del territorio de los Estados Unidos Mexicanos por “PEUGEOT” a:

Destinatario de los Datos Personales

Finalidad

Red de distribuidores autorizados de PEUGEOT dentro del territorio nacional.

Para que los distribuidores autorizados puedan prestarle servicios relacionados con productos de la marca PEUGEOT o proporcionarle el bien o producto que desee, así como para enviarle información sobre los productos y servicios que ofrecen. Le pedimos que revise también detenidamente los avisos de privacidad de dichos distribuidores, ya que ellos son los Responsables del tratamiento que hagan de sus datos personales.

Usted tiene derecho a oponerse a esta transferencia de datos. Si desea hacerlo, por favor envíenos su solicitud de acuerdo al procedimiento que se describe en la siguiente sección, “Derechos del Titular”.

Autoridades competentes

Para cumplir requerimientos de autoridades competentes y otras obligaciones legales, para salvaguardar el interés público o la procuración o administración de justicia; o bien, para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial, así como en los casos específicamente permitidos por LA LEY.

Prospectos compradores o adquirentes

En caso de fusión o adquisición, para que el prospecto adquirente o comprador analice la situación de PEUGEOT.

Fusionante/ Adquirente

Para que utilice los datos en la misma forma en que PEUGEOT los utilizaba; es decir, para la relación laboral.

 

A otras empresas del grupo de PEUGEOT, filiales o subsidiarias, dentro de México o internacionalmente.

Para el análisis de PEUGEOT, la administración de la base de datos de clientes a nivel mundial.

Socios de negocios

[Encuestas, promociones, publicidad, recordatorios de servicio, llamados para realizar ajustes en modelo, comunicados con novedades de la marca en México y programas de fidelización]

Derechos del Titular

El Titular de los datos personales, debidamente acreditado, en forma personal y/o a través de su representante legal, podrá ejercer los derechos de acceso, rectificación, cancelación y oposición con respecto a sus datos personales. Asimismo, podrá limitar el uso o divulgación de sus datos cuando lo considere conveniente o revocar el consentimiento que haya otorgado para el tratamiento de sus datos. Su solicitud para el ejercicio de estos derechos deberá ser presentada ante el Departamento de Datos Personales de PEUGEOT en el domicilio aquí señalado, o por correo electrónico a la dirección siguiente: contacto@peugeot.com. Tratándose de los requisitos de la solicitud, así como su tramitación y los plazos de respuesta, “PEUGEOT” y el Titular, se regirán por lo dispuesto en “LA LEY”. Asimismo, si usted, desea dejar de recibir mensajes promocionales de nuestros productos y/o servicios, puede solicitarlo a los mecanismos de contacto señalados en el presente párrafo o al teléfono 01 800 (52) PEUGEOT (7384968).

 Para mayor referencia, su solicitud deberá contener, al menos, la siguiente información:

Su nombre completo, domicilio y correo electrónico para poder comunicarle la respuesta a su solicitud.
El documento que acredite su identidad (copia de identificación oficial) y, en su caso, personalidad de su representante (con copia de la identificación oficial que corresponda).
La descripción clara y precisa de los datos personales respecto de los cuales busca ejercer alguno de los derechos.
Cualquier documento o información que facilite la localización de sus datos personales.
En caso de solicitar una rectificación de datos personales deberá indicar también las modificaciones a realizarse y aportar la documentación que sustente su petición.
 Le responderemos sobre la procedencia de su solicitud en un plazo máximo de 20 días hábiles contados a partir de su recepción y, de ser procedente, tendrá 15 días hábiles para hacer efectivo el derecho que solicite. Si su solicitud está incompleta, al recibirla le solicitaremos la complete en el término de cinco días hábiles.

 El derecho de acceso se dará por cumplido cuando se ponga a disposición del Titular, en el domicilio referido en el párrafo anterior, los datos personales, o bien, mediante la expedición de copias simples, documentos electrónicos o cualquier otro medio que, en su momento, determine PEUGEOT.

 Para más información sobre el procedimiento de ejercicio de derechos, envíenos un correo a contacto@peugeot.com.

 Medidas de Seguridad

PEUGEOT utiliza tecnología de vanguardia y medidas de seguridad administrativas, técnicas y físicas razonables y suficientes para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizados.

 Modificaciones al Aviso de Privacidad

En caso de modificaciones futuras al presente aviso, las mismas le serán comunicadas por “PEUGEOT” vía correo electrónico a la dirección que ha proporcionado en los formatos de registro del SITIO” y/o a través de una publicación en su página corporativa www.peugeot.com.mx; o bien, por cualquier otro medio de comunicación oral, impreso o electrónico que PEUGEOT determine para tal efecto.

Uso de cookies

Peugeot México, S.A. de C.V. utiliza cookies con la finalidad de analizar el uso de la página web, mostrarle publicidad personalizada y obtener estadísticas. Las cookies son pequeños archivos de texto que pueden recabar datos personales y otra información, como su sistema operativo, su navegador, páginas que visita, tiempo que pasa en nuestro sitio, su dirección de Protocolo de Internet, sus preferencias. Las cookies pueden deshabilitarse siguiendo las instrucciones de su navegador. Para más información sobre estas tecnologías.

Fecha última modificación: 4 de octubre de 2017.
                    </p>
                </div>
            </div>;
            <div className="privacidad-note col-6" onClick={() => this.handleClick('show')}>
                <b>Aviso de Privacidad</b>
             </div>
            <div className="leyenda col-6">
                    * Precio sujeto a cambio sin previo aviso. 
                    Imágenes de carácter ilustrativo, consulta disponibilidad, 
                    precios y aplicación con tu distribuidor autorizado.
            </div>
        </div>
        );
    }
}

export default Leyendas;