import React from 'react'

export default function ModalPenguin(props) {
    const {onClose ,status = true} = props
    return (
        <div className={`relative justify-center items-center w-full h-full flex`}>
            <div className={`penguinModal `}>
                <div class="penguin">
                    <div class="penguin-bottom">
                        <div class="right-hand"></div>
                        <div class="left-hand"></div>
                        <div class="right-feet"></div>
                        <div class="left-feet"></div>
                    </div>
                    <div class="penguin-top">
                        <div class="right-cheek"></div>
                        <div class="left-cheek"></div>
                        <div class="belly"></div>
                        <div class="right-eye">
                            <div class="sparkle"></div>
                        </div>
                        <div class="left-eye">
                            <div class="sparkle"></div>
                        </div>
                        <div class="blush-right"></div>
                        <div class="blush-left"></div>
                        <div class="beak-top"></div>
                        <div class="beak-bottom"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
