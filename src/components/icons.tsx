// Small inline icons not available in lucide-react (e.g. ORCID).

export function OrcidIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      role="img"
      aria-label="ORCID"
      className={className}
      fill="currentColor"
    >
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM86.3 186.2H70.9V79.1h15.4v107.1zM78.6 66.9c-5.5 0-9.9-4.5-9.9-9.9 0-5.5 4.4-9.9 9.9-9.9 5.5 0 9.9 4.5 9.9 9.9 0 5.4-4.4 9.9-9.9 9.9zm104.5 48.3c0 24.6-19.3 44.6-44.5 44.6h-30.7V79.1h30.7c25.2 0 44.5 20 44.5 36.1zm-15.4.2c0-17.1-11.4-28-28.8-28h-15.4v56h15.4c17.4 0 28.8-11 28.8-28z" />
    </svg>
  );
}
