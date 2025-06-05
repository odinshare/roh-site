export default function Footer() {
  return (
    <footer className="bg-[var(--primary-blue)] text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Recovery on the Harbor</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} A Program of NSCS</p>
        </div>
        <div className="space-y-2 text-sm">
          <p>979 Bennington St., East Boston, MA 02128</p>
          <p>Phone: (617) 874-8046</p>
          <p> Web Design by ContentByKevin.com</p>
        </div>
      </div>
    </footer>
  );
}
