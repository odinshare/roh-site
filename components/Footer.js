export default function Footer() {
  return (
    <footer className="bg-[var(--primary-blue)] text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Recovery on the Harbor</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} A Program of NSCS</p>
        </div>
        <div className="space-y-2 text-sm">
          <p>1234 Harbor St., Boston, MA</p>
          <p>Email: info@recoveryontheharbor.org</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
}
