import { AChangeSelector } from './selector.actions'
import { Dispatch } from 'redux'

export enum DbColumns {
    classOfWorker = 'class%20of%20worker',
    industryCode = 'industry%20code',
    occupationCode = 'occupation%20code',
    education = 'education',
    wagePerHour = 'wage%20per%20hour',
    lastEducation = 'last%20education',
    maritalStatus = 'marital%20status',
    majorIndustryCode = 'major%20industry%20code',
    majorOccupationCode = 'major%20occupation%20code',
    mace = 'mace',
    hispanice = 'hispanice',
    sex = 'sex',
    memberOfLabor = 'member%20of%20labor',
    reasonForUnemployment = 'reason%20for%20unemployment',
    fulltime = 'fulltime',
    capitalGain = 'capital%20gain',
    capitalLoss = 'capital%20loss',
    dividends = 'dividends',
    incomeTaxLiability = 'income%20tax%20liability',
    previousResidenceRegion = 'previous%20residence%20region',
    previousResidenceState = 'previous%20residence%20state',
    householdWithFamily = 'household-with-family',
    householdSimple = 'household-simple',
    weight = 'weight',
    msaChange = 'msa-change',
    regChange = 'reg-change',
    withinRegChange = 'within-reg-change',
    livedHere = 'lived-here',
    migrationPrevResInSunbelt = 'migration%20prev%20res%20in%20sunbelt',
    w = 'w',
    familyMembersUnder20118 = 'family%20members%20under%20118',
    fatherBirthCountry = 'father%20birth%20country',
    motherBirthCountry = 'mother%20birth%20country',
    birthCountry = 'birth%20country',
    citizenship = 'citizenship',
    ownBusinessOrSelfEmployed = 'own%20business%20or%20self%20employed',
    fillQuestionnaireForVeteranSAdmin = 'fill%20questionnaire%20for%20veteran%20s%20admin',
    veteransBenefits = 'veterans%20benefits',
    weeksWorkedInYear = 'weeks%20worked%20in%20year',
    year = 'year',
    salaryRange = 'salary%20range',
}

export const DbItems: any[] = Object.keys(DbColumns).map((key: any) => ({
    key,
    value: DbColumns[key],
}))

export interface SelectorStateReducer {
    selector: DbColumns
}

export const defaultSelectorStateReducer: SelectorStateReducer = {
    selector: DbColumns.classOfWorker,
}

export interface SelectorStateProps {
    selector: DbColumns
}

export interface SelectorDispatchProps {
    changeSelector: (selector: DbColumns) => AChangeSelector
    dispatch: Dispatch
}
