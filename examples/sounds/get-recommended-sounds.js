/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Renderforest = require('../../src/lib/renderforest')

const options = { signKey: 'mock-signKey', clientId: -1 }
const renderforest = new Renderforest(options)

const payload = {
  templateId: 701,
  duration: 10
}
renderforest.getRecommendedSounds(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
