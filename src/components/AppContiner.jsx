function AppContiner({ children }) {
  return (
    <div className="w-full overflow-y-scroll space-y-2 sm:w-2/3 h-screen sm:h-4/5 p-6 rounded-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto bg-yellow-100 capitalize">
      {children}
    </div>
  );
}
export default AppContiner;
