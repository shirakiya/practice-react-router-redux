const initialState = {
  name: window.appName || '',
};

export default function app(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
