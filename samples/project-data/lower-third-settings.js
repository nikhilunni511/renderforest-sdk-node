/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(15220886)
  .then((projectDataInstance) =>
    projectDataInstance.getScreen(0)
      .setLowerThirdSettings(2, 6)
      .save()
  )
  .then(console.log)
  .catch(console.error)
