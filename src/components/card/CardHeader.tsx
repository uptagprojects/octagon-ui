interface CardHeaderProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, children }) => (
    <header className="oct-card__header">
        {title && <h3 className="oct-card__title">{title}</h3>}
        {subtitle && <h4 className="oct-card__subtitle">{subtitle}</h4>}
        {children}
    </header>
);

export default CardHeader;