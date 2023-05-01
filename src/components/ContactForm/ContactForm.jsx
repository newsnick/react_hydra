import { useForm } from 'react-hook-form'
import styles from '../../styles/ContactForm/ContactForm.module.scss'
import { nameRegex, emailRegex } from '../../utils'
import React, { useState, useCallback } from 'react'
import lineGradient from '../../assets/webbrowser/icons/linegradient.svg'
import styled from 'styled-components'
import '../../styles/_global.scss'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  background: transparent;
  text-align: center;
  ${(props) =>
    props.headerType === 'header1' &&
    `
    @include header1;
  `}
`

export const Header2 = styled.div`
  background: transparent;
  text-align: center;
  margin-bottom: 5%;
  @include header2;
`

export const Line = styled.div`
  background: transparent;
  text-align: center;
  padding: 3%;
  margin-bottom: -10px;
`

export const FormBackGround = styled.div`
  width: 1275px;
  height: 1008px;
  background: radial-gradient(50% 50% at 50% 50%, $formbg, $formbg2);
  box-shadow: 0px 4px 4px $boxshadow;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  background: transparent;
  text-align: center;
`

export const SubmitBtn = styled.button`
  @include btn;
  width: 214px;
  height: 48px;
`

export const InputField = styled.input`
  background: transparent !important;
  height: 72px;
  border: 2px solid $btnradius;
  border-radius: 40px;
  width: 524px;
  padding-left: 7%;

  &.inputField2 {
    @include inputfield;
    width: 1058px;
    height: 72px;
    padding-left: 3%;
    cursor: pointer;
  }
`

export const InputTextArea = styled.textarea`
  background: transparent !important;
  height: 210px;
  border: 2px solid $btnradius;
  border-radius: 40px;
  width: 1058px;
  resize: none;
  padding: 3%;
  margin: 3%;

  @include inputfield;
  justify-content: center;
  display: inline;
`

export const NameEmail = styled.div`
  display: flex;
  justify-content: center;
  gap: 9.5px;
`

export const MsgPhone = styled.div`
  display: flex;
  justify-content: center;
  padding: 3%;
  gap: 9.5px;
`

export const NeutralText = styled.div`
  font-size: 11.7077px;
  line-height: 14px;
  margin: 5px 0 20px 0;
  width: 660px;
`

export const NeutralAsterisk = styled.div``

export const Error = styled.div`
  color: $alertcolor;
`

export const Invalid = styled.div`
  border-color: $alertcolor;
  color: $alertcolor;
`

export const Subject = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 100;
`

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

/* import { useForm } from 'react-hook-form'
import styles from '../../styles/ContactForm/ContactForm.module.scss'
import { nameRegex, emailRegex } from '../../utils'
import React, { useState, useCallback } from 'react'
import lineGradient from '../../assets/webbrowser/icons/linegradient.svg'

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
 */
