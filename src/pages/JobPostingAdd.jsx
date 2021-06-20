import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import JobPostingService from '../services/jobPostingService'
import JobTitleService from '../services/jobTitleService'
import CityService from '../services/cityService'
import JobTypeService from '../services/jobTypeService'
import JobTimeService from '../services/jobTimeService'
import moment from 'moment';


export default function JobPostingAdd() {

    const initialValues = {
        employerId: '',
        ilanBaslik: '',
        ilanDetay: '',
        ilanSehir: '',
        ilanPozisyon: '',
        ilanPersonelSayisi: '',
        ilanCalismaTuru: '',
        ilanCalismaZamani: '',
        ilanBitisTarihi: '',
        minimumMaas: '',
        maximumMaas: '',
        releaseDate: ''
        // formKontrol: false
    }

    const onSubmit = values => {
        console.log('form data :', values);

        let jobPost = {
            employer: { id: values.employerId },
            jobTitle: { id: values.ilanPozisyon },
            city: { id: values.ilanSehir },
            postTitle: values.ilanBaslik,
            jobDescription: values.ilanDetay,
            openPositionCount: values.ilanPersonelSayisi,
            jobType: { id: values.ilanCalismaTuru },
            jobTime: { id: values.ilanCalismaZamani },
            applicationDeadline: values.ilanBitisTarihi,
            minSalary: values.minimumMaas,
            maxSalary: values.maximumMaas,
            releaseDate: moment().format("YYYY-MM-DD")
        };
        console.log(jobPost)
        let jobPostingService = new JobPostingService()
        jobPostingService.addPost(jobPost).then(result => console.log(result.data.message))
    }

    /* const validate = values => {
         let errors = {}
 
         if (!values.employerId) {
             errors.employerId = 'Employer ID Alanı Boş Geçilemez.'
         }
 
         if (!values.ilanBaslik) {
             errors.ilanBaslik = 'İlan Başlık Alanı Boş Geçilemez.'
         }
 
         if (!values.ilanDetay) {
             errors.ilanDetay = 'İlan Detay Alanı Boş Geçilemez.'
         }
 
         if (!values.ilanSehir) {
             errors.ilanSehir = 'Şehir Alanı Boş Geçilemez.'
         }
 
         if (values.formKontrol == false) {
             errors.formKontrol = 'İşaretlenmeden Kayıt Edilemez..'
         }
 
         return errors;
     }*/

    const validationSchema = yup.object({
        employerId: yup.string().required('Lütfen Alanı Doldurunuz.'),
        ilanBaslik: yup.string().required('Lütfen Alanı Doldurunuz.'),
        ilanDetay: yup.string().required('Lütfen Alanı Doldurunuz.'),
        ilanSehir: yup.string().required('Lütfen Alanı Doldurunuz.'),
        ilanPozisyon: yup.string().required('Lütfen Alanı Doldurunuz.'),
        ilanPersonelSayisi: yup.number().required('Lütfen Alanı Doldurunuz.'),
        ilanCalismaTuru: yup.string().required('Lütfen Alanı Doldurunuz.'),
        ilanCalismaZamani: yup.string().required('Lütfen Alanı Doldurunuz.'),
        ilanBitisTarihi: yup.date().required('Lütfen Alanı Doldurunuz.'),
        formKontrol: yup.boolean().isTrue('İşaretlenmeden Kayıt Edilemez.'),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
    })

    const [jobPositions, setJobPositions] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);
    const [jobTimes, setJobTimes] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobTitleService();
        let cityService = new CityService();
        let jobTypeService = new JobTypeService();
        let jobTimeService = new JobTimeService();

        jobPositionService.getAllJobTitle().then((result) => setJobPositions(result.data.data));
        cityService.getAllCity().then((result) => setCities(result.data.data));
        jobTypeService.getAllJobType().then((result) => setJobTypes(result.data.data));
        jobTimeService.getAllJobTime().then((result) => setJobTimes(result.data.data));
    }, []);

    console.log('form value :', formik.values);
    console.log('form errors :', formik.errors);

    return (
        <div className="JobPostingAdd">
            <div className="card text-dark bg-light mb-2 mx-auto" style={{ maxWidth: 600 }}>
                <h4 className="card-header mb-2" style={{ textAlign: 'left' }}>İlan Yayınla</h4>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="employerId" placeholder="İşveren" {...formik.getFieldProps("employerId")} />
                            <label htmlFor="employerId" className="form-label">Employer ID</label>
                            {formik.touched.employerId && formik.errors.employerId ? <div className="formError">{formik.errors.employerId}</div> : null}
                        </div>
                        <div className="mb-2 row">
                            <div className="col-6">
                                <select className="form-select" id="ilanPozisyon" {...formik.getFieldProps("ilanPozisyon")} aria-label="Default select example">
                                    <option selected value="" style={{ color: "#ccc" }}>İş Pozisyonu Seçiniz</option>
                                    <option value='-' disabled>――――</option>
                                    {jobPositions.map((jobPosition) => (
                                        <option key={jobPosition.id} value={jobPosition.id}>{jobPosition.title}</option>
                                    ))}
                                </select>
                                {formik.touched.ilanPozisyon && formik.errors.ilanPozisyon ? <div className="formError">{formik.errors.ilanPozisyon}</div> : null}
                            </div>
                            <div className="col-6">
                                <select className="form-select" id="ilanSehir" {...formik.getFieldProps("ilanSehir")} aria-label="Default select example">
                                    <option selected value="" style={{ color: "#ccc" }}>Şehir Seçiniz</option>
                                    <option value='-' disabled>――――</option>
                                    {cities.map((city) => (
                                        <option key={city.id} value={city.id}>{city.cityName}</option>
                                    ))}
                                </select>
                                {formik.touched.ilanSehir && formik.errors.ilanSehir ? <div className="formError">{formik.errors.ilanSehir}</div> : null}
                            </div>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="ilanBaslik" placeholder="İlanınıza vermek istediğiniz başlık" {...formik.getFieldProps("ilanBaslik")} />
                            <label htmlFor="ilanBaslik" className="form-label">İlan Başlığı</label>
                            {formik.touched.ilanBaslik && formik.errors.ilanBaslik ? <div className="formError">{formik.errors.ilanBaslik}</div> : null}
                        </div>
                        <div className="form-floating mb-2">
                            <textarea style={{ height: 100 }} className="form-control" id="ilanDetay" placeholder="İlanınızın açıklaması"{...formik.getFieldProps("ilanDetay")}></textarea>
                            <label htmlFor="ilanDetay" className="form-label">İlan Detayı</label>
                            {formik.touched.ilanDetay && formik.errors.ilanDetay ? <div className="formError">{formik.errors.ilanDetay}</div> : null}
                        </div>
                        <div className="form-floating mb-2">
                            <input type="number" className="form-control" id="ilanPersonelSayisi" placeholder="İşe alınacak personel sayısı" {...formik.getFieldProps("ilanPersonelSayisi")} />
                            <label htmlFor="ilanPersonelSayisi" className="form-label">Aranan Personel Sayısı</label>
                            {formik.touched.ilanPersonelSayisi && formik.errors.ilanPersonelSayisi ? <div className="formError">{formik.errors.ilanPersonelSayisi}</div> : null}
                        </div>
                        <div className="mb-2 row">
                            <div className="col-6">
                                <select className="form-select" id="ilanCalismaTuru" {...formik.getFieldProps("ilanCalismaTuru")} aria-label="Default select example">
                                    <option selected value="" style={{ color: "#ccc" }}>Çalışma Türü</option>
                                    <option value='-' disabled>――――</option>
                                    {jobTypes.map((jobType) => (
                                        <option key={jobType.id} value={jobType.id}>{jobType.job_type}</option>
                                    ))}
                                </select>
                                {formik.touched.ilanCalismaTuru && formik.errors.ilanCalismaTuru ? <div className="formError">{formik.errors.ilanCalismaTuru}</div> : null}
                            </div>
                            <div className="col-6">
                                <select className="form-select" id="ilanCalismaZamani" {...formik.getFieldProps("ilanCalismaZamani")} aria-label="Default select example">
                                    <option selected value="" style={{ color: "#ccc" }}>Çalışma Zamanı</option>
                                    <option value='-' disabled>――――</option>
                                    {jobTimes.map((jobTime) => (
                                        <option key={jobTime.id} value={jobTime.id}>{jobTime.job_time}</option>
                                    ))}
                                </select>
                                {formik.touched.ilanCalismaZamani && formik.errors.ilanCalismaZamani ? <div className="formError">{formik.errors.ilanCalismaZamani}</div> : null}
                            </div>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="date" className="form-control" id="ilanBitisTarihi" placeholder="İşe alınacak personel sayısı" {...formik.getFieldProps("ilanBitisTarihi")} />
                            <label htmlFor="ilanBitisTarihi" className="form-label">Son Başvuru Tarihi</label>
                            {formik.touched.ilanBitisTarihi && formik.errors.ilanBitisTarihi ? <div className="formError">{formik.errors.ilanBitisTarihi}</div> : null}
                        </div>
                        <div className="mb-4 row">
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="ilanMinimumUcret" placeholder="İşe alınacak personel sayısı" {...formik.getFieldProps("minimumMaas")} />
                                    <label htmlFor="ilanMinimumUcret" className="form-label">Minimum Maaş Ücreti</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="ilanMaksimumUcret" placeholder="İşe alınacak personel sayısı" {...formik.getFieldProps("maximumMaas")} />
                                    <label htmlFor="ilanMaksimumUcret" className="form-label">Maksimum Maaş Ücreti</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-flex justify-content-md-end">
                            <button type="submit" className="btn btn-outline-success" style={{ width: 200 }}>İlanı Paylaş</button>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

/*
<div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="formKontrol" {...formik.getFieldProps("formKontrol")} />
                    <label className="form-check-label" htmlFor="formKontrol" style={{ textAlign: 'left' }}>Okudum/Onayladım</label>
                    {formik.touched.formKontrol && formik.errors.formKontrol ? <div className="formError">{formik.errors.formKontrol}</div> : null}
                </div>

                */