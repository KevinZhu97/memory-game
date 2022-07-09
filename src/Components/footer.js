import logo from './GitHub-Mark.png'

const Footer = () => {
    return(
        <div style={styles.footer}>
            <p>Copyright © 2022 KevinZhu97</p>
            <img style={styles.Logo} src={logo} alt='github logo'/>
        </div>
    )
}

const styles = {
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px',
    },
    Logo: {
        height: '1.2rem',
        width: '1.2rem',
    }
}

export default Footer