import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { FooterUI, InfoFooter, LinksFooter, LogosFooter, RedesFooter, DireccionFooter, ExtrasFooter } from './FooterStyles'

const Footer = () => {
  return (
        <FooterUI>
                <InfoFooter>
                        <LinksFooter>
                                <LogosFooter>
                                        <img src="./images/logo.png" alt="logo_empresa" />
                                        <p>VLAND</p>
                                </LogosFooter>
                                <RedesFooter>
                                        <a href=''><BsWhatsapp /></a>
                                        <a href=''><BsInstagram /></a>
                                        <a href=''><BsFacebook /></a>
                                        <a href=''><BsLinkedin /></a>
                                </RedesFooter>
                        </LinksFooter>
                        <DireccionFooter>
                                <p><FaLocationArrow /> Antezana 247, Ciudad de Buenos Aires, Argentina</p>
                                <p><FaPhone /> 03-03-456 (nanananananana)</p>
                                <p><FaEnvelope /> villar.lucase@gmail.com</p>
                        </DireccionFooter>
                </InfoFooter>
                <ExtrasFooter>
                        <p>2023 ViniLand ® - All Rights Reserved</p>
                        <a href=''>Términos y Condiciones</a> | <a href=''>Política de Privacidad</a>
                </ExtrasFooter>
        </FooterUI>
  )
}

export default Footer