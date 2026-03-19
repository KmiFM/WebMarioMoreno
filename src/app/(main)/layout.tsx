import Navigation from '@/components/Navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
        {children}
      </div>
    </>
  );
}
