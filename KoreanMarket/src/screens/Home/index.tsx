import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from 'src/components/Layouts'

const Home = () => {
  return (
    <SafeAreaView>
      <Header title="welcome" hasBackBtn={false} />
    </SafeAreaView>
  )
}

export default Home
