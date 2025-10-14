import React from 'react'
import Header from '../Ui/Header'
import Footer from '../Ui/Footer'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
  <div className="flex flex-col min-h-screen">
  <Header />
  <main className="flex-1 overflow-y-auto">
    <Outlet />
  </main>
  <Footer />
</div>
  );
};

export default AppLayout
