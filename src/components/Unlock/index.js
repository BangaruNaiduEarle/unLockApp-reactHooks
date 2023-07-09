import {useState} from 'react'
import {MainContainer, LockImg, Para, LockBtn} from './styledComponents'

const Unlock = () => {
  const [isLock, setIsLock] = useState(true)

  const reqImage = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const ImgAlt = isLock ? 'lock' : 'unLock'

  const paraText = isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'

  const BtnName = isLock ? 'Unlock' : 'lock'

  const onClickLockBtn = () => {
    setIsLock(prevState => !prevState)
  }

  return (
    <MainContainer>
      <LockImg src={reqImage} alt={ImgAlt} />
      <Para>{paraText}</Para>
      <LockBtn type="button" onClick={onClickLockBtn}>
        {BtnName}
      </LockBtn>
    </MainContainer>
  )
}

export default Unlock
