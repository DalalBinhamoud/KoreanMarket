import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { ILoadingState } from 'src/models/store'
import { globalStyles } from 'src/styles/global.style'
import { connect } from 'react-redux'

interface LoadingProps {
  loadingState: ILoadingState
}

const Loading = (props: LoadingProps) => {
  return props.loadingState.show ? (
    <View style={globalStyles.loading} testID="loading">
      <ActivityIndicator animating={true} />
    </View>
  ) : null
}

const mapStateToProps = (store: { loading: ILoadingState }): LoadingProps => ({
  loadingState: store.loading,
})

export default connect(mapStateToProps)(Loading)
