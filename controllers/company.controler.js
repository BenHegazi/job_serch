import {Router} from 'express'
import { IsHR } from '../middleware/isHr.js'
import { addCompany } from '../services/company.service.js'


const companyRouter = Router()

companyRouter.post('/',IsHR,addCompany)

export default companyRouter