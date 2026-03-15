export default function Footer() {
    return (
        <footer
            className="text-center py-8 text-xs font-medium"
            style={{
                color: 'var(--text-muted)',
                borderTop: '1px solid var(--border-main)',
            }}
            id="footer"
        >
            <p>&copy; {new Date().getFullYear()} Jasper Dale M. Manahan. All rights reserved.</p>
        </footer>
    );
}
