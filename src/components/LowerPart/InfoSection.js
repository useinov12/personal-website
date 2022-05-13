import React from 'react'


const fragmentOpen = (
    <svg className='fragment-open' width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.3916 37.1925C46.8855 37.1823 46.4019 36.9958 46.0368 36.67C45.6778 36.336 45.4761 35.8833 45.4761 35.4112C45.4761 34.9392 45.6778 34.4865 46.0368 34.1525L52.1972 28.5L46.1902 22.8475C45.8515 22.5098 45.6672 22.0632 45.6759 21.6018C45.6847 21.1403 45.8859 20.7 46.2372 20.3736C46.5884 20.0473 47.0623 19.8603 47.559 19.8522C48.0556 19.8441 48.5363 20.0154 48.8997 20.33L56.236 27.17C56.595 27.504 56.7966 27.9567 56.7966 28.4287C56.7966 28.9008 56.595 29.3535 56.236 29.6875L48.7208 36.67C48.3649 36.9943 47.8899 37.181 47.3916 37.1925Z" fill="white"/>
        <path d="M33.5595 37.1231C33.0512 37.1226 32.5639 36.9347 32.2047 36.6006L24.8685 29.7606C24.5095 29.4266 24.3078 28.9738 24.3078 28.5018C24.3078 28.0298 24.5095 27.5771 24.8685 27.2431L32.3581 20.2606C32.7174 19.9236 33.2061 19.733 33.7166 19.7308C34.2272 19.7286 34.7177 19.9149 35.0804 20.2487C35.4431 20.5825 35.6482 21.0366 35.6506 21.5109C35.653 21.9853 35.4525 22.4411 35.0932 22.7781L28.9073 28.4306L34.9143 34.0118C35.2733 34.3458 35.475 34.7985 35.475 35.2706C35.475 35.7426 35.2733 36.1953 34.9143 36.5293C34.5613 36.8813 34.0763 37.0938 33.5595 37.1231Z" fill="white"/>
    </svg>
)
const fragmentClose = (
    <svg className='fragment-close' width="74" height="57" viewBox="0 0 74 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.4736 37.3524C59.8747 37.3421 59.3026 37.1557 58.8705 36.8299C58.4457 36.496 58.2071 36.0433 58.2071 35.5712C58.2072 35.0992 58.4458 34.6465 58.8706 34.3125L66.1603 28.6599L59.0526 23.0078C58.6519 22.6702 58.4338 22.2236 58.4441 21.7622C58.4545 21.3007 58.6926 20.8604 59.1083 20.5341C59.5239 20.2077 60.0846 20.0207 60.6723 20.0126C61.26 20.0044 61.8288 20.1757 62.2588 20.4903L70.9393 27.3297C71.3641 27.6637 71.6027 28.1164 71.6026 28.5884C71.6026 29.0604 71.364 29.5132 70.9392 29.8472L62.0464 36.8298C61.6253 37.1541 61.0632 37.3408 60.4736 37.3524Z" fill="white"/>
        <path d="M39.4866 37.3656C38.8851 37.3652 38.3085 37.1773 37.8835 36.8432L29.2031 30.0037C28.7783 29.6698 28.5397 29.2171 28.5397 28.745C28.5397 28.273 28.7784 27.8203 29.2032 27.4863L38.0657 20.5037C38.4909 20.1667 39.0691 19.9761 39.6732 19.9738C40.2773 19.9716 40.8578 20.1578 41.287 20.4917C41.7161 20.8255 41.9588 21.2795 41.9616 21.7538C41.9644 22.2282 41.7271 22.684 41.302 23.021L33.9821 28.6736L41.0898 34.2544C41.5146 34.5883 41.7532 35.041 41.7532 35.5131C41.7531 35.9851 41.5145 36.4378 41.0897 36.7718C40.672 37.1238 40.0981 37.3363 39.4866 37.3656Z" fill="white"/>
        <path d="M53.293 16.8285C53.6688 15.9411 54.6976 15.515 55.5908 15.8768C56.4841 16.2387 56.9035 17.2515 56.5277 18.1389L47.3339 39.8468C46.958 40.7342 45.9292 41.1603 45.036 40.7984C44.1428 40.4366 43.7234 39.4238 44.0992 38.5364L53.293 16.8285Z" fill="white"/>
    </svg>
)
function InfoSection({topic, children}) {
    return (
        <div className='info-section'>
            {fragmentOpen} 
            <h1>{topic}</h1>
                {children}
            {fragmentClose}
        </div>
    )
}

export default InfoSection
