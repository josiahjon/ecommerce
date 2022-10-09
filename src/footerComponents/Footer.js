import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FooterContainer, 
FooterWrap,
FooterLinksContainer, 
FooterLinksWrapper,
FooterLinkItems, 
FooterLinkTitle, 
FooterLink, 
SocialMedia, 
SocialMediaWrap, 
SocialLogo,
WebsiteRights, 
SocialIcons, 
SocialIconLink
} from './FooterElements'


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Kicks</FooterLinkTitle>
                            <FooterLink to="/">About Us</FooterLink>
                            <FooterLink to="/">Career Opportunities</FooterLink>
                            <FooterLink to="/">Privacy Statement</FooterLink>
                            <FooterLink to="/">Terms of Use</FooterLink>
                            <FooterLink to="/">Ad Choices</FooterLink>
                        <FooterLinkTitle>Customer Service</FooterLinkTitle>
                            <FooterLink to="/">Contact Us</FooterLink>
                            <FooterLink to="/">Ordering Help</FooterLink>
                            <FooterLink to="/">Shipping Info</FooterLink>
                            <FooterLink to="/">Store Pick Up</FooterLink>
                            <FooterLink to="/">COVID-19 Information</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <SocialIconLink href="//www.facebook.com" target="_blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/" target="_blank"
                        aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.tiktok.com" target="_blank"
                        aria-label="Tiktok">
                            <FaTiktok/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.youtube.com/" target="_blank"
                        aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                 
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    {/* <SocialLogo to='/'>
                        Josiah
                    </SocialLogo>
                    <WebsiteRights>{new Date().getFullYear()}</WebsiteRights> 
                    <SocialIcons>
                        <SocialIconLink href="//www.github.com" target="_blank"
                        aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.linkedin.com/" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons> */}
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap> 
    </FooterContainer>
  )
}

export default Footer
