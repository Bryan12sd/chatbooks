import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import CardListAudio from '../../Components/CardListAudioComponent';
import HeaderComponent from '../../Components/HeaderComponent';
import * as Colors from '../../Styles/Colors';
const {width, height} = Dimensions.get('window');
class Audiostories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {key: 'one', title: 'La tierra habla'},
        {key: 'two', title: 'Después del temblor'},
        {key: 'three', title: 'Querido Planeta'},
      ],
      index: 0,
      setIndex: 0,
      data: [
        {
          id: 11,
          title: 'Un deseo para Leo',
          content:
            'Érase una vez un otoño muy pero muy ventoso en los campos era la época en la cual las flores comenzaban a secarse y los dientes de león o como algunos les llaman panaderos, comenzaban a volar. Los niños ansiaban verlos en el aire para soplarlos y pedirles un deseo. Y en este otoño sólo quedaba uno para cumplir los deseos de todos los niños.\r\n\r\nLeo era el último diente de león que quedaba en la pradera lleno de semillas y con muchas ganas de conocer el mundo para cumplir sueños. Una tarde. El viento lo elevó muy, muy alto y lo llevó a pasear por varios pueblos. En cada lugar donde pasaba, Leo era atrapado por un niño diferente que quería pedirle un deseo.\r\n\r\nPedro, el hijo del doctor. Le pidió un camión de juguete nuevo y sopló sobre leo desprendiéndose una de sus semillas. Sofía, una niña de otro pueblo que leo visitó pidió como deseo ser maestra como su tía guadalupe. Y otra de sus semilla se desprendió así. Poco a poco iba quedándose sin semillas por cada deseo que le habían pedido hasta que le quedó solo una mientras volaba por los aires, lo atrapó una niña llamada sol.\r\n\r\nCuando lo estaba a punto de soplar, leo la miró y le pidió a la nena un deseo. Otorgo tu deseo. Pero además, te regalo mi última semilla para que pueda sembrarla y cosechar dientes de león. Así cada año, más deseos de niño se cumplirán. La niña lo miró y aceptó la propuesta de la flor mágica. Cuando sopló sobre leo, se desprendió esa última semilla, la cual sol recogió y se la llevó a la plaza más cercana para colocarla en la tierra y regarla con agua cuidadosamente.\r\n\r\nLa niña una vez cumplido, el deseo de leo, le preguntó qué haría ahora que ya no tenía semilla. Leo muy tranquilo. Le contestó ahora estaré volando, conociendo muchos lugares y feliz porque los deseos seguirán cumpliéndose gracias a tu ayuda mientras cuides con mucho amor mi semilla cada año habrá más dientes de león que en cada otoño.\r\n\r\nVolarán repartiendo magia. Gracias a tu. Estás ayudando a la madre tierra cuidando parte de ella y ella así nos cuida a nosotros también. Regalándonos las cuatro a agua, alimentos, aire y amor.',
          author_name: 'Gabriela\tFernández',
          illustrator_name: 'Helena Dorado Castro',
          picture: {
            id: 20,
            model_type: 'App\\Models\\Story',
            model_id: 11,
            uuid: '49ac87fa-4d18-48c0-8ef9-9c08a1fe8d47',
            collection_name: 'picture',
            name: '63f3e3df8c663_un-deseo-para-leo',
            file_name: '63f3e3df8cz663_un-deseo-para-leo.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 170296,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 20,
            created_at: '2023-02-20T21:19:46.000000Z',
            updated_at: '2023-02-20T21:19:46.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/20/63f3e3df8c663_un-deseo-para-leo.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/20/conversions/63f3e3df8c663_un-deseo-para-leo-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/20/conversions/63f3e3df8c663_un-deseo-para-leo-preview.jpg',
          },
          audio: {
            id: 21,
            model_type: 'App\\Models\\Story',
            model_id: 11,
            uuid: '4446d5f3-124b-41a6-a77d-1a32fcc52520',
            collection_name: 'audio',
            name: '63f3e3ee51c7a_CUENTOS - Un Deseo Para Leo',
            file_name: '63f3e3ee51c7a_CUENTOS---Un-Deseo-Para-Leo.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 7915200,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 21,
            created_at: '2023-02-20T21:19:46.000000Z',
            updated_at: '2023-02-20T21:19:46.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/21/63f3e3ee51c7a_CUENTOS---Un-Deseo-Para-Leo.mp3',
          },
        },
        {
          id: 10,
          title: 'Ponga, la Orangután de Borneo',
          content:
            'Aunque el planeta tierra nos parece muy grande en realidad es como una aldea enorme para bien o para mal y aunque no nos demos cuenta, nuestro comportamiento individual influye en su conservación. Yo me llamo ponga y soy una orangután de Borneo. Esta isla era hasta hace unos pocos años un paraiso. Mi familia vivía feliz hasta donde la vista llegaba y más allá hasta el mar todo era selva virgen. \r\n\r\nTeníamos alimento, protección, abrigo y sobre todo, tranquilidad para disfrutar con nuestros hijos. Pero un día aparecieron enormes excavadoras que lo llenaron todo de humo y olor a gasolina. El estruendo también era enorme. Nos asustamos y huimos hacia el interior de la isla. En muy poco tiempo desaparecieron los árboles, las plantas de la selva y los animales que ahí vivimos.\r\n\r\nMi familia se ha reducido ya a la mitad y corremos el riesgo de desaparecer en pocos años. \r\n\r\nPero, por qué hacen esto las personas y qué tienes que ver tú que vives tan lejos al otro lado del mundo?\r\n\r\nSe ha descubierto un aceite barato el de palma. Que, aunque no es saludable, da muchos beneficios a las grandes empresas de alimentación.\r\n\r\nEstán deforestando la selva para plantar miles y millones de estas palmas cuyo aceite se utilizan todo el mundo para fabricar productos de consumo diario, especialmente la boyería. Necesitamos recuperar nuestra selva, nuestro hogar. Necesitamos de tu ayuda para lograrlo, porque ahora ya sabes de dónde procede y el daño que hace.\r\n\r\nCuando te pregunten sobre el aceite de palma, piensa en mí y en mi hija. Wombi, gracias.',
          author_name: 'Agustin Larrauri',
          illustrator_name: 'Jose Miguel Gonzalez Cid',
          picture: {
            id: 18,
            model_type: 'App\\Models\\Story',
            model_id: 10,
            uuid: 'f29460da-e2aa-4e22-8c6d-6c60007fc530',
            collection_name: 'picture',
            name: '63f3e3427efe4_ponga-la- orangutana-de-borneo',
            file_name: '63f3e3427efe4_ponga-la--orangutana-de-borneo.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 801374,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 18,
            created_at: '2023-02-20T21:18:31.000000Z',
            updated_at: '2023-02-20T21:18:31.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/18/63f3e3427efe4_ponga-la--orangutana-de-borneo.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/18/conversions/63f3e3427efe4_ponga-la--orangutana-de-borneo-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/18/conversions/63f3e3427efe4_ponga-la--orangutana-de-borneo-preview.jpg',
          },
          audio: {
            id: 19,
            model_type: 'App\\Models\\Story',
            model_id: 10,
            uuid: '2e524c95-3b18-4963-9c7f-804b15c34083',
            collection_name: 'audio',
            name: '63f3e351e8b0d_CUENTOS - Ponga, La Orangutana de Borneo',
            file_name:
              '63f3e351e8b0d_CUENTOS---Ponga,-La-Orangutana-de-Borneo.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 5395200,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 19,
            created_at: '2023-02-20T21:18:31.000000Z',
            updated_at: '2023-02-20T21:18:31.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/19/63f3e351e8b0d_CUENTOS---Ponga,-La-Orangutana-de-Borneo.mp3',
          },
        },
        {
          id: 9,
          title: 'Mario y la Playa',
          content:
            'Mario era un niño de seis años que vivía en una aldea de pescadores, todas las noches corrí hasta la playa para esperar a su padre que venía de pescar. Tenía una barquina de madera que habían pintado entre los dos, había quedado preciosa. \r\n\r\nA Mario le encantaba la playa, pero hacía tiempo que la veía sucia llena de basuras una noche, mientras esperaba a su papá, se encontró una lata grande al borde del mar. Quiso recogerla para tirarla la basura cuando de repente, tres pajaritos empezaron a piar. Estaban los tres metidos dentro de la lata. \r\n\r\nMiraron a Mario con ojos bien grandes. \r\nQué sorpresa. La mamá de los tres pajaritos llegó de repente a la lata, tenía las plumas muy sucias. \r\n\r\nPor qué tienes las plumas manchadas? \r\nLe preguntó Mario\r\n\r\nPorque la playa está muy contaminada y cada vez que voy a buscar comida para mis pequeños, termino con las plumas sucias. Respondió mamá pájaro con tristeza. \r\n\r\nMario se quedó preocupado, esa noche y casi no pudo dormir pensando qué podía hacer para ayudar a sus nuevos amigos\r\n\r\nAl día siguiente, tuvo una gran idea. Le pediría a mamá y a papá que le ayudaran a limpiar la playa. Ellos entenderían la gravedad de la situación, así lo hicieron. \r\nAl siguiente domingo fueron papá, mamá y Mario al borde del mar, y comenzaron a recoger las basuras que encontraban. Aparecieron botellas cigarros, restos de comida, pero cuanta más basura parecía, ellos recogían con más ganas.\r\n\r\nAl verlos, otros vecinos del pueblo comenzaron a ayudar también en la limpieza y empezaron a llegar más vecinos y más vecinos y más vecinos. Mario estaba feliz viendo cómo todas las personas se unían para ayudar. Pero la sorpresa fue máxima cuando se dio cuenta de que mamá pájaro y los tres pajaritos estaban ayudando con sus picos a recoger la basura, ellos también querían contribuir, de repente gatitos y perritos se unieron también a la limpieza y luego otros animales gaviotas, golondrinas, cigüeñas. Todos llegaron para ayudar, en menos de una hora la playa estaba limpísima. \r\n\r\nPara celebrarlo todos los vecinos y animales de la comunidad se unieron en una gran fiesta. Compartieron comida, canciones, bailes, muchas sonrisas y alegría. Y a partir de entonces entre todos, cuidaron que la playa y el mar se mantuvieran siempre limpios.',
          author_name: 'Patricia Ventura',
          illustrator_name: 'Ivana Beatriz Spinoso Cordeiro',
          picture: {
            id: 16,
            model_type: 'App\\Models\\Story',
            model_id: 9,
            uuid: '4c869cfb-26f2-4700-bff2-ff7682fdb979',
            collection_name: 'picture',
            name: '63f3e216704b6_mario-y-la-playa',
            file_name: '63f3e216704b6_mario-y-la-playa.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 227681,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 16,
            created_at: '2023-02-20T21:12:18.000000Z',
            updated_at: '2023-02-20T21:12:18.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/16/63f3e216704b6_mario-y-la-playa.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/16/conversions/63f3e216704b6_mario-y-la-playa-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/16/conversions/63f3e216704b6_mario-y-la-playa-preview.jpg',
          },
          audio: {
            id: 17,
            model_type: 'App\\Models\\Story',
            model_id: 9,
            uuid: 'bfe4b0dd-678e-4eea-a7fd-4a4effe72f39',
            collection_name: 'audio',
            name: '63f3e22d914b5_CUENTOS - Mario y la Playa',
            file_name: '63f3e22d914b5_CUENTOS---Mario-y-la-Playa.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 8077440,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 17,
            created_at: '2023-02-20T21:12:18.000000Z',
            updated_at: '2023-02-20T21:12:18.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/17/63f3e22d914b5_CUENTOS---Mario-y-la-Playa.mp3',
          },
        },
        {
          id: 7,
          title: 'Los Guardianes del Medio Ambiente',
          content:
            'En un lugar de la galaxia hace millones de años, existieron diversas especies de animales. Cada una de ellas compartían un amor infinito por la naturaleza imposible de comparar con cualquier otro sentimiento de afecto. Parecía que las plantas expresaban ese inmenso cariño hacia los animales devolviendo para ellos sus más grandes y deliciosos frutos para que se alimentaran y de esta manera, hacer los más fuertes y grandes. \r\n\r\nLos animales, aunque no podían hablar con las plantas en señal de agradecimiento con ellas, siempre estaban pendientes de recoger las semillas que se desprendían de tan lindos árboles y arbustos para colocarlas en lugares donde quedaran protegidas a la sombra del sol muy cerca del agua, y sobre la tierra para que pudieran crecer y así convertirse en los nuevos bosques verdes de diversas especies y tamaños con muchas flores de colores variados.\r\n\r\nEran tiempos tan maravillosos que hasta el aire, el sol, la luna, las estrellas, las nubes y el agua se alegraban al apreciar la convivencia de la vegetación con la fauna silvestre. Por eso también decidieron unirse a colaborar para seguir embelleciendo los hermosos paisajes que el aire recorría cada vez que soplaba el viento.\r\n\r\nEl sol abrigaba con su calor la naturaleza, desde lo alto del firmamento y a la luz del día, la lluvia derramaba el agua para refrescar y calmar la sed de todos los seres de la tierra durante el día o la noche. Las nubes fieles compañeras advertían el comportamiento del clima para prevenir que no les fuera pasar nada a ninguna de las criaturas de la tierra cuando hiciera mucho calor o mucho frío.\r\n\r\nLo cierto es que todo era perfecto. También hacían parte de este estupendo panorama las rocas, montañas, ríos, playas, tierra y arena. Pero como éstas no podían decirle nada a los animales plantas ni tampoco al aire al sol, la luna, las estrellas, las nubes y el agua. Simplemente admitían que sobre ellas se dejaran caer, permanecieran descansaran o se desplazaran libremente hacia donde quisieran. \r\n\r\nNo es tarde aún para vivir la aventura del reino sin rey o reina en nuestra galaxia es clave aprender a respetar la naturaleza y su entorno, cuidando los recursos como el agua, la madera, tomando solamente lo necesario y ayudando a la conservación de las especies de plantas de animales, tal y como se cuenta en esta historia.',
          author_name: 'Jesus Rafael Solorza Sanabria',
          illustrator_name: 'Elena Cordero Crespo',
          picture: {
            id: 13,
            model_type: 'App\\Models\\Story',
            model_id: 7,
            uuid: '248fcbfe-0494-4045-9cb1-3f8d12ea1fd0',
            collection_name: 'picture',
            name: '63f3e102207bb_los-guardianes-del-medio-ambiente',
            file_name: '63f3e102207bb_los-guardianes-del-medio-ambiente.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 396257,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 13,
            created_at: '2023-02-20T21:09:09.000000Z',
            updated_at: '2023-02-20T21:09:09.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/13/63f3e102207bb_los-guardianes-del-medio-ambiente.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/13/conversions/63f3e102207bb_los-guardianes-del-medio-ambiente-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/13/conversions/63f3e102207bb_los-guardianes-del-medio-ambiente-preview.jpg',
          },
          audio: {
            id: 15,
            model_type: 'App\\Models\\Story',
            model_id: 7,
            uuid: 'ca4b7615-e5b3-48a0-8f14-116aba992290',
            collection_name: 'audio',
            name: '63f3e1101e362_CUENTOS - Los Guardianes del Medio Ambiente',
            file_name:
              '63f3e1101e362_CUENTOS---Los-Guardianes-del-Medio-Ambiente.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 8444160,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 15,
            created_at: '2023-02-20T21:09:09.000000Z',
            updated_at: '2023-02-20T21:09:09.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/15/63f3e1101e362_CUENTOS---Los-Guardianes-del-Medio-Ambiente.mp3',
          },
        },
        {
          id: 6,
          title: 'La Costa Franca',
          content:
            'La ballena franca austral había escuchado muchas veces por parte de ballenas mayores que la costa de la Península Valdés era muy linda para que los Ballenatos nacieran y se criaran allí y de las personas se decía que eran amables y simpáticas, por lo que ella siempre quiso conocerlas. Se imaginaba junto a su cría saludando a los humanos jugando en aquellas aguas. Y cuando supo que iba a ser mamá, decidió emprender su viaje hacia allí. No le faltaba mucho para llegar cuando empezó a notar objetos extraños frente a ella, latas, botellas, bolsas y restos de vegetales que se deshacían en el agua. Observó con tristeza el panorama desolador que tenía frente a ella.\r\n\r\nFue así que comenzó a viajar hacia el. Esperando encontrar alguna costa lejos de la basura y el peligro, iba muy triste. Cuando de pronto vio algo que se acercaba a gran velocidad. Era un pingüino de Magallanes. \r\nHola, \r\nsaludó el pingüino haciendo un gesto con la aleta? \r\n\r\nHola Señor pingüino, sabrá usted de alguna costa segura para tener a mi cría?\r\nEstoy muy cansada.\r\nLe contó con decepción el panorama que se había encontrado.\r\n\r\nMuchos han tenido que abandonar esas aguas. Dijo el pingüino,\r\nvivo con mi familia en una región más al sur donde no hay basura y las orcas no nos molestan. \r\n\r\nNo sé si podré llegar. Mis fuerzas me abandonan,\r\npor su cria sígame. Yo sé que llegará \r\n\r\nCon esfuerzo ella se movió mientras su nuevo amigo le daba ánimos y así llegaron juntos. Bienvenida a nuestro hogar. Allí, la ballena se emocionó al ver un paisaje tan hermoso y limpio. Los pingüinos le dijeron que otras ballenas llegarían en los próximos días, ya que su comunidad era conocida por saber mantener las aguas limpias.\r\n\r\nLa ballena pudo tener a su Ballenato y vivir junto a las familias de pingüinos. También conoció a los humanos. Eran buenos, respetaban el espacio de sus amigos animales y no lo contaminaban. Era un mundo nuevo para ella desde entonces vive feliz en las aguas patagónicas. Así como cuidamos y limpiamos nuestras casas, así debemos hacerlo también con nuestras plazas, parques, playas, ríos y mares. \r\n\r\nAllí viven muchos animalitos, son sus hogares y también quieren y merecen vivir dignamente trabajemos todos por un mundo sin contaminación donde podamos convivir con personas, animales y plantas. Trabajemos todos por un mundo sin contaminación donde podamos convivir personas, animales y plantas. Todos somos necesarios en el planeta.',
          author_name: 'Patricia Fort',
          illustrator_name: 'Helena Dorado Castro',
          picture: {
            id: 11,
            model_type: 'App\\Models\\Story',
            model_id: 6,
            uuid: '9e0f9a94-16a3-41e1-8e64-9eebe9d0e17d',
            collection_name: 'picture',
            name: '63f3e089ae672_la-costa-franca',
            file_name: '63f3e089ae672_la-costa-franca.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 597268,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 11,
            created_at: '2023-02-20T21:05:47.000000Z',
            updated_at: '2023-02-20T21:05:47.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/11/63f3e089ae672_la-costa-franca.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/11/conversions/63f3e089ae672_la-costa-franca-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/11/conversions/63f3e089ae672_la-costa-franca-preview.jpg',
          },
          audio: {
            id: 12,
            model_type: 'App\\Models\\Story',
            model_id: 6,
            uuid: 'd9eac310-f024-46b2-9fec-32441d4cf813',
            collection_name: 'audio',
            name: '63f3e0a44d9bc_CUENTOS - La Costa Franca',
            file_name: '63f3e0a44d9bc_CUENTOS---La-Costa-Franca.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 7712640,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 12,
            created_at: '2023-02-20T21:05:47.000000Z',
            updated_at: '2023-02-20T21:05:47.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/12/63f3e0a44d9bc_CUENTOS---La-Costa-Franca.mp3',
          },
        },
        {
          id: 5,
          title: 'Feliz Cumpleaños; Madre Tierra',
          content:
            'Newton es un niño muy especial que amaba con todo su corazoncito a la madre tierra. Una vez leyendo su libro favorito, recordó que la madre tierra muy pronto cumpliría años, por lo cual decidió ir a visitarla para indagar sobre aquellos regalos que a ella le harían más feliz. Al llegar al centro de la tierra, notó que ella se sentía muy triste y desanimada, así que le preguntó:\r\n\r\nMadre tierra qué tienes, Por qué estás tan enfermita? \r\nLa madre tierra respondió:\r\nEstoy así a causa de tanta contaminación, basuras y otros factores que me hacen mucho daño. \r\nNewton se sentía tan abrumado al verle en ese estado que intentó animarla contándole chistes. Pero nada de lo que él hiciera cambiaba su estado de ánimo llegó la noche y Newton sólo pensaba qué podía hacer para que se sintiera más feliz.\r\n\r\nAsí que inundó su cuarto con millones de ideas a la mañana siguiente, convocó una junta que involucraba a todos los seres vivos del universo. Llegaron seres vivos de todas las razas, tamaños y colores. Newton les contó cómo vio a la madre tierra y les compartió todas sus ideas. En ese instante, todos se izaron para preparar una celebración inolvidable.\r\n\r\nEl primer grupo se dedicó a reciclar todas las basuras. El segundo grupo plantó bombas de vida para que hubieran más árboles. El tercer grupo se dedicó a sembrar concientización en cada ser humano para mejorar la vida de los animales y del medio ambiente, con el reciclaje de las basuras el cuarto grupo creó un castillo con botellas llenas de plásticos de colores y arena.\r\n\r\nConstruyeron portabas con palillos de paletas. También crearon botellas solares para hacer más colorida la fiesta, con el papel reciclado crearon el mensaje de cumpleaños y así un sin fin de regalos inventaron los seres vivos en agradecimiento por tantos años de amor que cada día les obsequiaba. Por fin llegó su cumpleaños.\r\n\r\nTodos los seres vivos madrugaron para ultimar detalles y en la tarde llegó la madre tierra. Se veía tan maravillosamente hermosa, tan feliz, tan esperanzada, tan emocionada que a cada uno los abrazó con su manto de protección complacida por tanto cariño y aprecio que le habían demostrado cada uno de los seres vivos.\r\n\r\nNewton se acercó y le dijo:\r\nMadre tierra, esto es para ti. Gracias por acogernos en tu casa por darnos la oportunidad de vivir y disfrutar de todas las cosas que cada día nos proporcionas. Gracias por permitirnos conocer todos los tesoros naturales que existen en cada rincón de este hermoso planeta. Te amamos, feliz cumpleaños.',
          author_name: 'Angela Johana Gómez',
          illustrator_name: 'Elena Cordero Crespo',
          picture: {
            id: 9,
            model_type: 'App\\Models\\Story',
            model_id: 5,
            uuid: '5761a218-b5bf-4d4b-9f2c-a7f0c670bf21',
            collection_name: 'picture',
            name: '63f3e03b6f6bb_feliz-cumpleanos-madre-tierra',
            file_name: '63f3e03b6f6bb_feliz-cumpleanos-madre-tierra.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 839051,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 9,
            created_at: '2023-02-20T21:04:05.000000Z',
            updated_at: '2023-02-20T21:04:05.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/9/63f3e03b6f6bb_feliz-cumpleanos-madre-tierra.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/9/conversions/63f3e03b6f6bb_feliz-cumpleanos-madre-tierra-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/9/conversions/63f3e03b6f6bb_feliz-cumpleanos-madre-tierra-preview.jpg',
          },
          audio: {
            id: 10,
            model_type: 'App\\Models\\Story',
            model_id: 5,
            uuid: 'deb9cf60-2a11-4939-98a1-5a9d78febfe9',
            collection_name: 'audio',
            name: '63f3e01a2077f_CUENTOS - Feliz Cumpleaños, Madre Tierra',
            file_name:
              '63f3e01a2077f_CUENTOS---Feliz-Cumpleaños,-Madre-Tierra.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 7340160,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 10,
            created_at: '2023-02-20T21:04:05.000000Z',
            updated_at: '2023-02-20T21:04:05.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/10/63f3e01a2077f_CUENTOS---Feliz-Cumpleaños,-Madre-Tierra.mp3',
          },
        },
        {
          id: 4,
          title: 'Éxito de verano',
          content:
            'Se acerca el verano en una ciudad costera elegida por muchas personas para pasar las vacaciones. Algo raro está ocurriendo, espumoso el mar está muy revoltoso. Sus olas no paran de ir y venir muy agitadas, serena la arena nota los arrebatos de espumoso, pero no sabe cómo calmarlo hasta que una mañana serena la arena arma una montaña grandota justo en la orilla tratando de llamar la atención de espumoso para invitarlo a conversar.\r\n\r\nQué es lo que te inquieta? \r\nEstoy muy preocupado. Dice espumoso, se acercan las vacaciones y muchas personas, cada vez que vienen a la playa, juegan y disfrutan. Pero cuando se van, dejan todo sucio alrededor. Cuando sube mi marea la noche, yo trago toda esa basura que daña a los peces que viven en mis aguas.\r\n\r\nSerena le dijo a espumoso que lo comprende, porque a ella tampoco le gusta que la cubran de desperdicios. En ese momento se acerca carlota la gaviota que suele tener siempre alguna novedad. Curiosa, Carlota preguntó por qué tan serio? Justo ahora que empieza la época más linda del año, el verano. Serena le contó que habían estado conversando y su preocupación por la contaminación de la playa. \r\n\r\nClaro que eso es un problema, dijo carlota, pero no saben lo que acabo de ver. Un grupo de personas con cestos negros y verdes estaban cerca del muelle. Los escuché comentar que tenían que colocarlos en toda la playa espumoso el mar y serena la arena Lle preguntaron a carlota la gaviota. Para qué hacen eso? Entonces carlota les contó que tenían también muchos carteles con llamativos dibujos y un enorme símbolo de prohibido arrojar basura todos festejaron la noticia. \r\n\r\nFinalmente, llegó el día de la inauguración de la temporada de vacaciones y la playa se llenó de gente, Espumoso, Serena y Carlota observaban con alegría cómo todas las personas sobre todos los más pequeños seguían las indicaciones de los carteles depositando en los tachos verdes los elementos reciclables y en los tachos negros la basura. Con una playa más limpia gracias al cuidado y colaboración de todos esta temporada será un éxito.',
          author_name: 'Nancy Rodriguez',
          illustrator_name: 'Helena Dorado Castro',
          picture: {
            id: 7,
            model_type: 'App\\Models\\Story',
            model_id: 4,
            uuid: '4af52904-a453-444a-ae40-d3b361705a77',
            collection_name: 'picture',
            name: '63f3df9997355_el-exito-del-verano',
            file_name: '63f3df9997355_el-exito-del-verano.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 751828,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 7,
            created_at: '2023-02-20T21:01:39.000000Z',
            updated_at: '2023-02-20T21:01:39.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/7/63f3df9997355_el-exito-del-verano.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/7/conversions/63f3df9997355_el-exito-del-verano-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/7/conversions/63f3df9997355_el-exito-del-verano-preview.jpg',
          },
          audio: {
            id: 8,
            model_type: 'App\\Models\\Story',
            model_id: 4,
            uuid: '8f2cf98b-52c9-426b-8b29-61a755c55112',
            collection_name: 'audio',
            name: '63f3dfaa530f7_CUENTOS - Éxito del Verano',
            file_name: '63f3dfaa530f7_CUENTOS---Éxito-del-Verano.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 6315840,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 8,
            created_at: '2023-02-20T21:01:39.000000Z',
            updated_at: '2023-02-20T21:01:39.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/8/63f3dfaa530f7_CUENTOS---Éxito-del-Verano.mp3',
          },
        },
        {
          id: 3,
          title: 'Colores',
          content:
            'Hace tiempo. El planeta estaba bajo el dominio de los opuestos. Todo era blanco o negro ardiente o gélido sólido o líquido verdadero o falso. Eran principios irreconciliables y reinaba la tristeza. Un día tras una tormenta de estrellas, una enorme roca de cristal impactó en lo alto de la montaña. De pronto todo se iluminó.\r\n\r\nUn haz de luz atravesó el diamante y se descompuso en todos los colores del arco iris. De pronto tímidamente empezaron los matices, las flores todas eran flores, pero cada una tenía su personalidad y eso las hacía bellas. Lo mismo sucedía con las mariposas. Las había grandes y pequeñas, azules, naranjas y multicolores, y todas eran bellas.\r\n\r\nNo, digamos los pájaros, los insectos, las piedras, los peces y las personas. Qué decir de las personas de tez clara u oscura, morenas pelirrojas o rubias, jóvenes o ancianas del pasado del presente o del futuro. Que hablan un idioma u otro que viven aquí o allí diferentes, únicas e insustituibles. Y quién salvo un ignorante puede decir que un elefante vale más que una hormiga o un ruso más que un japonés, en la naturaleza, todo es bello y necesario, y cada cosa tiene su función por eso, no preguntes a una madre quién de sus hijos o hijas es más bello o quiere más? No digas que el mar es mejor que la selva, el desierto o la montaña. No digas que el frío es mejor que el calor de todo el universo. Somos los más afortunados porque cada día podemos disfrutar de las mayores maravillas y ser felices con lo que somos.\r\n\r\nMañana, cuando despiertes, mírate al espejo y sonríe porque estarás viendo al pintor que puede llenar tu vida y la de los que te rodean de luz, color y felicidad.',
          author_name: 'Agustin Larrauri',
          illustrator_name: 'Pedro Ruiz',
          picture: {
            id: 5,
            model_type: 'App\\Models\\Story',
            model_id: 3,
            uuid: '404200bf-0d93-4b6d-8393-cc8056e70730',
            collection_name: 'picture',
            name: '63f3deb80aca6_colores',
            file_name: '63f3deb80aca6_colores.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 1082951,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 5,
            created_at: '2023-02-20T20:57:47.000000Z',
            updated_at: '2023-02-20T20:57:48.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/5/63f3deb80aca6_colores.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/5/conversions/63f3deb80aca6_colores-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/5/conversions/63f3deb80aca6_colores-preview.jpg',
          },
          audio: {
            id: 6,
            model_type: 'App\\Models\\Story',
            model_id: 3,
            uuid: '3d216f77-cdcb-4f3e-8e69-109fa5058729',
            collection_name: 'audio',
            name: '63f3dec93465c_CUENTOS - Colores',
            file_name: '63f3dec93465c_CUENTOS---Colores.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 7109760,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 6,
            created_at: '2023-02-20T20:57:48.000000Z',
            updated_at: '2023-02-20T20:57:48.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/6/63f3dec93465c_CUENTOS---Colores.mp3',
          },
        },
        {
          id: 2,
          title: 'Brunete Aprende a Reciclar',
          content:
            'Resi, Cartonito, Vidrichu y Plastiquín son cuatro contenedores amigos que viven juntos en la misma calle. Hace mucho tiempo que son amigos, pero Resi empieza a estar un poco cansado porque él es el único que siempre está lleno, el resto de sus amigos siempre están vacíos. \r\nUn día un pequeño se acercó hasta los cuatro amigos a tirar la basura de su casa. La intención del niño era tirarlo todo al contenedor gris, que ya estaba más que saturado. \r\n\r\nEntonces los tres amigos verde, azul y amarillo decidieron preguntarle al niño:\r\n\r\n-\t¿Por qué lo tiras todo al gris? Nosotros estamos vacíos\r\nA lo que el niño contestó:\r\n-\tPorque en mi casa sólo tenemos un cubo de basura, y lo tiramos todo ahí, cualquier cosa, ya sea lata, papel, plástico, vidrio o residuos.\r\nLos cuatro amigos se miraron, y de repente entendieron todo. Explicaron al niño que eso no estaba bien, y que para ayudar a proteger el medio ambiente y tener un mundo más limpio, tenía que intentar hacer ver a sus papás, que la basura se tiene que clasificar.\r\n-\tPequeño, vamos a hacer un juego. Ahora cuando subas a casa le tienes que contar a tus papás que la basura hay que repartirla de esta forma:\r\no\tLos papeles y los cartones se tiran al contenedor de color azul. \r\no\tLos vidrios hay que tirarlos al contenedor de color verde. \r\no\tLas latas y los plásticos hay que tirarlos al contenedor amarillo.\r\no\tEl resto de residuos, son los que se tiran al contenedor gris.\r\n\r\nSi lo hacéis así, podrán ser reutilizables para hacerlos útiles de nuevo. Es posible que lo que ahora te parece una simple botella de plástico, una vez reciclada, se convierta en un bonito juguete para ti.\r\n\r\nEl niño, al escuchar estas palabras, entendió la importancia del reciclaje y salió corriendo hacia su casa con la intención de contárselo a sus padres.\r\n\r\nAl día siguiente, el pequeño volvió a bajar a tirar la basura, esta vez acompañado de su papá, pues ya no traían una sola, sino tres bolsas diferentes.\r\n\r\n-\tHola amigos, le conté a mi papá la forma en la que había que clasificar la basura, y aquí lo traemos repartido en tres bolsas diferentes: una llena de papeles y cartones para tirar sobre el contenedor azul, otra llena de plásticos y de latas para tirar en el contenedor amarillo y otra llena de botellas de vidrio para tirar al contenedor verde. \r\n\r\nLos cuatro amigos se pusieron a dar palmas rebosantes de alegría, y Resi, el contenedor gris, empezó a sentirse por fin aliviado.',
          author_name: 'María Modesta Cebrian',
          illustrator_name: 'Sandra Lázaro Mesa',
          picture: {
            id: 3,
            model_type: 'App\\Models\\Story',
            model_id: 2,
            uuid: 'dac4e7eb-e258-48d6-b5d9-a03d61d10a3e',
            collection_name: 'picture',
            name: '63f3dd5cb144d_brunete-aprende-a-reciclar',
            file_name: '63f3dd5cb144d_brunete-aprende-a-reciclar.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 603528,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 3,
            created_at: '2023-02-20T20:52:36.000000Z',
            updated_at: '2023-02-20T20:52:37.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/3/63f3dd5cb144d_brunete-aprende-a-reciclar.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/3/conversions/63f3dd5cb144d_brunete-aprende-a-reciclar-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/3/conversions/63f3dd5cb144d_brunete-aprende-a-reciclar-preview.jpg',
          },
          audio: {
            id: 4,
            model_type: 'App\\Models\\Story',
            model_id: 2,
            uuid: '97c8ab84-e145-4946-a79d-aea3fdc30076',
            collection_name: 'audio',
            name: '63f3dd6b96dc0_CUENTOS - Brunete Aprende a Reciclar',
            file_name: '63f3dd6b96dc0_CUENTOS---Brunete-Aprende-a-Reciclar.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 6253440,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 4,
            created_at: '2023-02-20T20:52:37.000000Z',
            updated_at: '2023-02-20T20:52:37.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/4/63f3dd6b96dc0_CUENTOS---Brunete-Aprende-a-Reciclar.mp3',
          },
        },
        {
          id: 1,
          title: 'Bosque en Peligro',
          content:
            'Erase una vez en el pueblo pisos picados, Dana estaba jugando con la arena justo enfrente de su casa. Cuando vio un humo a lo lejos, un humo negro y espeso pensó que se parecía el humo que salía cuando su papá hacía una hoguera pero este era mucho más grande y más negro. Su cabeza la transportó a la última vez que su padre había hecho una hoguera.\r\n\r\nEsa noche habían hecho una fiesta, todos cantaban y bailaban alrededor del fuego. Recordaba perfectamente el olor del guiso que estaba haciendo su madre y lo rico que estaba sonrió recordando como se había manchado toda la cara a su hermanito pequeño con la comida era tan travieso. Volvió la vista al humo que había visto y vio que parecía cada vez más grande y que estaba más cerca.\r\n\r\nSe asustó y fue a avisar a sus padres. Ellos rápidamente avisaron a los vecinos del pueblo, se está quemando señorío de la sal. Los animalitos del bosque que habían logrado escapar del fuego corrían asustados por el pueblo. Un cervatillo bebe se paró justo enfrente de la casa de dana cojeaba hasta que se tumbó.\r\n\r\nDana salió de casa con su hermanito y juntos le curaron. No fueron los únicos niños del pueblo que ayudaron a curar a los animalitos mientras los padres corrían con cubos y todo lo que encontraban llenos de agua hacia señorío de la sal tardaron varias horas en conseguir apagar el fuego. Pero gracias a la colaboración de todos, señorío de la sal estaba salvado y todos los animales sanos y salvos. \r\n\r\nFue un día muy especial para todos porque tanto mayores como niños se sintieron importantes. Acabaron el día haciendo una fiesta de nuevo, cantando y bailando por lo felices que se sentían tanto Dana como su hermanito esa noche, antes de irse a dormir, pensaron en la carita de ese cervatillo que salvaron.',
          author_name: 'Tamara Romero',
          illustrator_name: 'Helena Dorado Castro',
          picture: {
            id: 1,
            model_type: 'App\\Models\\Story',
            model_id: 1,
            uuid: '81f677c6-d64c-4bb1-8d48-1b88161c58c0',
            collection_name: 'picture',
            name: '63f3118c3a803_el-bosque-en-peligro',
            file_name: '63f3118c3a803_el-bosque-en-peligro.png',
            mime_type: 'image/png',
            disk: 'public',
            conversions_disk: 'public',
            size: 934624,
            manipulations: [],
            custom_properties: {
              generated_conversions: {
                thumb: true,
                preview: true,
              },
            },
            responsive_images: [],
            order_column: 1,
            created_at: '2023-02-20T06:22:31.000000Z',
            updated_at: '2023-02-20T06:22:31.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/1/63f3118c3a803_el-bosque-en-peligro.png',
            thumbnail:
              'https://chatbooks.culturafundaciontelefonica.com/storage/1/conversions/63f3118c3a803_el-bosque-en-peligro-thumb.jpg',
            preview:
              'https://chatbooks.culturafundaciontelefonica.com/storage/1/conversions/63f3118c3a803_el-bosque-en-peligro-preview.jpg',
          },
          audio: {
            id: 2,
            model_type: 'App\\Models\\Story',
            model_id: 1,
            uuid: 'bd65fe59-eb64-467a-8c77-2a46e0ffd1aa',
            collection_name: 'audio',
            name: '63f3118fc9d23_CUENTOS - Bosque en Peligro',
            file_name: '63f3118fc9d23_CUENTOS---Bosque-en-Peligro.mp3',
            mime_type: 'audio/mpeg',
            disk: 'public',
            conversions_disk: 'public',
            size: 4875840,
            manipulations: [],
            custom_properties: [],
            responsive_images: [],
            order_column: 2,
            created_at: '2023-02-20T06:22:31.000000Z',
            updated_at: '2023-02-20T06:22:31.000000Z',
            url: 'https://chatbooks.culturafundaciontelefonica.com/storage/2/63f3118fc9d23_CUENTOS---Bosque-en-Peligro.mp3',
          },
        },
      ],
    };
  }

  render() {
    return (
      <BackgroundImageComponent>
        <HeaderComponent />
        <TabView
          navigationState={{
            index: this.state.index,
            routes: this.state.routes,
          }}
          renderScene={SceneMap({
            one: () => <CardListAudio data={this.state.data} />,
            two: () => <CardListAudio data={this.state.data} />,
            three: () => <CardListAudio data={this.state.data} />,
          })}
          onIndexChange={index => {
            {
              this.setState({setIndex: index});
            }
          }}
          initialLayout={{width: width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              renderLabel={({route}) => (
                <Text style={styles.audioStoriesText}>{route.title}</Text>
              )}
              style={{backgroundColor: Colors.violet1}}
            />
          )}
        />
      </BackgroundImageComponent>
    );
  }
}
const styles = StyleSheet.create({
  audioStoriesText: {
    fontFamily: 'Telefonica-Bold',
    color: Colors.white1,
    textAlign: 'center',
    fontSize: height * 0.02,
  },
});
export default Audiostories;
