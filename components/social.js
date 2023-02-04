import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a target="_blank" href="https://twitter.com/Tippy_uscpa" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
                </a>
            </li>
            <li>
                <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="sr-only">Facebook</span>
                </a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/sanoyusuke897" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="sr-only">GitHub</span>
                </a>
            </li>
        </ul>
    )
}