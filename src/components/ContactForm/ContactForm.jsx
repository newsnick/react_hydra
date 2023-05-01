import { useForm } from 'react-hook-form'
import styles from '../../styles/ContactForm/ContactForm.module.scss'
import { nameRegex, emailRegex } from '../../utils'
import React, { useState, useCallback } from 'react'
import lineGradient from '../../assets/webbrowser/icons/linegradient.svg'
import '../../styles/_global.scss'

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [selectedSubject, setSelectedSubject] = useState('')
  const onSubmit = useCallback(
    (data) => {
      console.log({ ...data, subject: selectedSubject })
    },
    [selectedSubject]
  )

  const nameEmailDiv = (
    <div className={styles.nameEmail}>
      <div className={styles.name}>
        <label htmlFor="fullName"></label>
        <input
          className={`${styles.inputField} ${errors.fullName ? 'invalid' : ''}`}
          type="text"
          placeholder="Your name *"
          name="fullName"
          {...register('fullName', {
            required: 'This field is required',
            pattern: {
              value: nameRegex,
              message: 'Invalid name format',
            },
          })}
        />
        {errors.fullName && (
          <span className="error">{errors.fullName.message}</span>
        )}
      </div>
      <div className={styles.email}>
        <label htmlFor="email"></label>
        <input
          className={styles.inputField}
          type="email"
          placeholder="Email *"
          name="email"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: emailRegex,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
    </div>
  )

  const msgPhoneDiv = (
    <div className={styles.msgPhone}>
      <div className={styles.comments}>
        <label htmlFor="comments"></label>
        <input
          className={styles.inputField}
          placeholder="Reason for contacting *"
          name="comments"
          {...register('comments', { required: 'This field is required' })}
        />
        {errors.comments && (
          <span className="error">{errors.comments.message}</span>
        )}
      </div>
      <div className={styles.phone}>
        <label htmlFor="phone"></label>
        <input
          className={styles.inputField}
          type="tel"
          placeholder="Phone *"
          name="phone"
          {...register('phone', { required: 'This field is required' })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>
    </div>
  )

  const subjectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]

  const messageDiv = (
    <>
      <div className={styles.subject}>
        <label htmlFor="subject"></label>
        <select
          className={styles.inputField2}
          name="subject"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          {...register('subject', { required: 'This field is required' })}
        >
          <option value="" disabled>
            Subject
          </option>
          {subjectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span className="error">{errors.subject.message}</span>
        )}
      </div>
      <div className={styles.messageField}>
        <label htmlFor="message"></label>
        <textarea
          className={styles.inputTextArea}
          placeholder="Tell Us Something *"
          name="message"
          {...register('message', { required: 'This field is required' })}
        />
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
      </div>
    </>
  )

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBackGround}>
        <p className={styles.header}>JOIN HYDRA</p>
        <img id={styles.line} src={lineGradient} alt="line" />
        <p className={styles.header2}>Let’s Build Your VR Experience</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {nameEmailDiv}
          {msgPhoneDiv}
          {messageDiv}

          <button className={styles.submitBtn} type="submit">
            Send To Hydra
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
