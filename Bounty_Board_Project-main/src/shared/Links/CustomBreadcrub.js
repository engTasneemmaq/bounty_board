import { Breadcrumb } from 'antd'
import React from 'react'

const CustomBreadcrub = ({routes=[{path:'' ,breadcrumbName:''},]}) => {
  return (
    <div className='flex justify-center'>

    <Breadcrumb
    routes={routes}
    />
    </div>
  )
}

export default CustomBreadcrub