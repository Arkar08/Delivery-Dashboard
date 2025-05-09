import AuthProvider from "./context/authContext"
import BookingProvider from "./context/BookingContext"
import CategoryProvider from "./context/CategoryContext"
import ProductProvider from "./context/ProductContext"
import UserProvider from "./context/UserContext"
import View from "./routes/View"


function App() {

  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <UserProvider>
            <BookingProvider>
              <View />
            </BookingProvider>
          </UserProvider>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
