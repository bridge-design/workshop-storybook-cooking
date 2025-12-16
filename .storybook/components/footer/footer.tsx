import React from 'react';
import styles from './footer.module.css';

interface FooterCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const FooterCard = ({ title, description, linkText, href }: FooterCardProps) => {
  return (
    <a href={href} className={styles.card} target="_blank" rel="noreferrer noopener">
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardLink}>
        {linkText} →
      </div>
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Explore More</h2>
          <p className={styles.subtitle}>
            Discover resources, get support, and connect with the community.
          </p>
        </div>
        <div className={styles.cards}>
          <FooterCard
            title="Documentation"
            description="Browse our comprehensive guides and tutorials"
            href="#"
            linkText="View docs"
          />
          <FooterCard
            title="Support"
            description="Need help? Reach out to our support team"
            href="#"
            linkText="Get help"
          />
          <FooterCard
            title="Community"
            description="Join our community and connect with others"
            href="#"
            linkText="Join us"
          />
        </div>
      </div>
    </footer>
  );
};
