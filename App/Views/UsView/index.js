import {Card} from '@rneui/base';
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import FooterComponent from '../../Components/FooterComponent';
import HeaderComponent from '../../Components/HeaderComponent';
import ButtonUs from '../../Components/IconImageComponent';
import Svg from '../../Libs/Svg';
import * as Colors from '../../Styles/Colors';
import Utils from '../../Libs/Utils';
const {width, height} = Dimensions.get('window');
class Us extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BackgroundImageComponent>
        <HeaderComponent />
        <ScrollView>
          <Card containerStyle={{marginBottom: height * 0.1}}>
            <View style={{padding: width * 0.01}}>
              <Text style={styles.usTextTitle}>
                CHATBOOKS, MICROCUENTOS PARA NIÑOS Y NIÑAS
              </Text>
              <Text style={styles.usTextContent}>
                Érase una vez, unos microcuentos enviados por WhatsApp que se
                convirtieron en una aplicación para los más pequeños de la casa,
                fortaleciendo los lazos afectivos de todo el núcleo familiar a
                través del fomento de la lectura.
              </Text>
              <Text style={styles.usTextContent}>
                ChatBooks es una iniciativa desarrollada por Fundación
                Telefónica Movistar que busca despertar el interés de niños y
                niñas por la lectura. Transportándolos hacia mundos mágicos
                dónde las aventuras de sus personajes les permiten generar
                conciencia y mejorar su respuesta frente a situaciones adversas,
                creando un ambiente de calma y tranquilidad. Así como promover
                temas sobre el cuidado del medio ambiente, el cumplimiento de
                los Objetivos de Desarrollo Sostenible, la familia, entre otros.
              </Text>
              <Text style={styles.usTextContent}>
                Todo comenzó el 16 de abril de 2016, cuando cientos de niños
                fueron impactados por el terremoto que afectó al Ecuador y
                devastó zonas de Manabí y Esmeraldas. Debido al sismo, el temor
                no permitió conciliar el sueño a la población infantil del país.
              </Text>
              <Text style={styles.usTextContent}>
                Por esta razón, pensando en ellos y en su futuro, Fundación
                Telefónica Movistar con el apoyo de la Agencia Publicis, crearon
                el Proyecto ChatBooks, un espacio a través de WhatsApp donde
                padres e hijos vencieron juntos sus miedos. Los padres de
                familia recibían cada tarde en su celular un cuento diario,
                donde narraban de manera divertida a través de personajes de la
                naturaleza, cómo la tierra nos habla y la forma en que debemos
                cuidarla.
              </Text>
              <Text style={styles.textCursive}>
                Una iniciativa de Fundación Teléfonica Movistar
              </Text>
              <TouchableOpacity>
                <Text
                  style={styles.textLink}
                  onPress={() => {
                    this.props.navigation.navigate('Html', {
                      url: 'https://legal.fundaciontelefonica.com/politica-de-privacidad-ec/',
                    });
                  }}>
                  POLÍTICAS DE PRIVACIDAD
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </ScrollView>
        <FooterComponent color={Colors.blue6}>
          <View style={styles.footer}>
            <Svg name="icon_logo" width={width * 0.15} height={width * 0.15} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.footerText}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textfooter}>Síguenos:{''} </Text>
                  <View style={styles.iconContainer}>
                    <ButtonUs
                      imageSource={require('../../Assets/Images/fb.png')}
                      onPress={() => {
                        Utils._openPages(
                          Platform.select({
                            ios: 'fb://profile/146783972042309',
                            android: 'fb://page/146783972042309',
                          }),
                          'https://www.facebook.com/FTMovistarEC',
                        );
                      }}
                    />
                    <ButtonUs
                      imageSource={require('../../Assets/Images/ig.png')}
                      onPress={() => {
                        Utils._openPages(
                          Platform.select({
                            ios: 'instagram://user?username=ftmovistarec',
                            android: 'instagram://user?username=ftmovistarec',
                          }),
                          'https://www.instagram.com/FTMovistarEc/',
                        );
                      }}
                    />
                    <ButtonUs
                      imageSource={require('../../Assets/Images/tw.png')}
                      onPress={() => {
                        Utils._openPages(
                          Platform.select({
                            ios: 'twitter://user?screen_name=FTMovistarEc',
                            android: 'twitter://user?screen_name=FTMovistarEc',
                          }),
                          'https://twitter.com/FTMovistarEc',
                        );
                      }}
                    />
                    <ButtonUs
                      imageSource={require('../../Assets/Images/yt.png')}
                      onPress={() => {
                        Utils._openPages(
                          Platform.select({
                            ios: 'vnd.youtube://user/FundTelefonicaEC',
                            android: 'vnd.youtube://user/FundTelefonicaEC',
                          }),
                          'https://www.youtube.com/user/FundTelefonicaEC',
                        );
                      }}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://fundaciontelefonica.com.ec/');
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Telefonica-Regular',
                      color: Colors.white1,
                      fontSize: width * 0.03,
                    }}>
                    www.fundaciontelefonica.com.ec
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'Telefonica-Regular',
                  color: Colors.white1,
                  fontSize: width * 0.025,
                }}>
                Una iniciativa de:
              </Text>
              <Image
                style={{
                  width: width * 0.2,
                  height: width * 0.1,
                }}
                source={require('../../Assets/Images/logoft.png')}
              />
            </View>
          </View>
        </FooterComponent>
      </BackgroundImageComponent>
    );
  }
}
const styles = StyleSheet.create({
  usTextTitle: {
    color: Colors.blue1,
    fontFamily: 'Telefonica-Bold',
    fontSize: width * 0.06,
    marginBottom: 20,
    marginTop: 20,

    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: width * 0.01,
    alignItems: 'center',
  },
  usTextContent: {
    color: Colors.gray2,
    fontFamily: 'Telefonica-Regular',
    fontSize: width * 0.05,
    marginBottom: 10,
    textAlign: 'center',
  },
  textCursive: {
    fontSize: height * 0.02,
    fontStyle: 'italic',
    textAlign: 'justify',
    padding: 10,
    color: Colors.gray1,
  },
  textLink: {
    fontSize: height * 0.03,
    textAlign: 'justify',
    padding: 10,
    color: Colors.violet1,
    textAlign: 'center',
    fontFamily: 'Telefonica-Bold',
  },
  footerText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfooter: {
    fontFamily: 'Telefonica-Regular',
    color: Colors.white1,
  },
  imageIcons: {
    width: width * 0.09,
    height: width * 0.05,
  },
  iconContainer: {
    backgroundColor: Colors.violet1,
    padding: width * 0.01,
    borderRadius: width * 0.2,
    flexDirection: 'row',
  },
});
export default Us;
