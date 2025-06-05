export const metadata = {
  title: 'Our Services | Recovery on the Harbor',
  description: 'Explore the peer-led services we offer to support people in recovery, from groups to coaching.',
  openGraph: {
    title: 'Our Services | Recovery on the Harbor',
    description: 'Discover our services designed to support recovery and wellness in East Boston.',
    url: 'https://recoveryontheharbor.com/services',
    siteName: 'Recovery on the Harbor',
    type: 'website',
  },
};

export default function ServicesLayout({ children }) {
  // This Server Component simply renders its children (the page)
  // You can also add shared navigation or wrappers here if needed.
  return <>{children}</>;
}
