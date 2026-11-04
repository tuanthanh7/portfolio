export default function PhoneMockup({ className = "", image = "/portfolio/assets/projects/gallery/jobs-list.png", alt = "Project app screen" }) {
  return (
    <div className={`phone-device ${className}`} aria-label={alt}>
      <img className="phone-artwork" src={image} alt={alt} />
    </div>
  );
}
