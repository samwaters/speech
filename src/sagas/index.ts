import { all } from "@redux-saga/core/effects"

import { settingsSaga } from "./settings.saga"

function* rootSaga() {
	yield all([
		settingsSaga(),
	])
}

export { rootSaga }
