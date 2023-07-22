import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} KKSAC Solutions.`}
      </span>
      <Link secondary className={styles.link} href="" target="_self">
        Crafted by yours truly
      </Link>
    </Text>
  </footer>
);
