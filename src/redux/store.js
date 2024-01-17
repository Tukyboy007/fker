import { configureStore } from "@reduxjs/toolkit";

import generalMomentSlice from "./reducer/GeneralMomentReducer";
import outerMomentSice from "./reducer/OuterMomentReducer";
import domesticMomentSlice from "./reducer/DomesticMomentReducer";
import specialMomemntSlice from "./reducer/SpecialMomentReducer";
import contentgridSlice from "./reducer/ContentGridReducer";
import sidebarSlice from "./reducer/SidebarSliceReducer";
import utilSlice from "./reducer/UtillSliceReducer";

const store = configureStore({
  reducer: {
    generalMomentSlice: generalMomentSlice,
    outerMomentSice: outerMomentSice,
    domesticMomentSlice: domesticMomentSlice,
    specialMomemntSlice: specialMomemntSlice,
    contentgridSlice: contentgridSlice,
    sidebarSlice: sidebarSlice,
    utilSlice: utilSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
