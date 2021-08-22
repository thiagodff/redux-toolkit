import { store } from '..';

// ReturnType é um utility type que retornar o tipo do retorno da função
export type ReduxStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
