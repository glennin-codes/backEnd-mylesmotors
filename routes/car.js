import express from 'express'
 const router= express.Router();
router.route('/:carId').get().patch().delete()
export default router
