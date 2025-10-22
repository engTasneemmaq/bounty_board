import { Eye, Download, FileText, Calendar, User } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import CreativeCard from '../../../../../shared/Cards/CreativeCard';
import { showMessage } from '../../../../../utils/toast';

export const BountyFilesDetails = () => {
    const bountyDetails = useOutletContext();
    
    // Mock files data - يمكن استبداله ببيانات حقيقية
    const files = [
        {
            id: 1,
            name: 'Project tech requirements.pdf',
            uploader: 'User Name',
            size: '56 MB',
            uploadTime: '1 hour ago',
            date: 'Feb 2, 2025',
            type: 'pdf'
        },
        {
            id: 2,
            name: 'Project tech requirements.pdf',
            uploader: 'User Name',
            size: '56 MB',
            uploadTime: '2 hours ago',
            date: 'Feb 2, 2025',
            type: 'pdf'
        },
        {
            id: 3,
            name: 'Project tech requirements.pdf',
            uploader: 'User Name',
            size: '56 MB',
            uploadTime: '3 hours ago',
            date: 'Feb 2, 2025',
            type: 'pdf'
        },
        {
            id: 4,
            name: 'Project tech requirements.pdf',
            uploader: 'User Name',
            size: '56 MB',
            uploadTime: '5 hours ago',
            date: 'Feb 2, 2025',
            type: 'pdf'
        },
        {
            id: 5,
            name: 'Project tech requirements.pdf',
            uploader: 'User Name',
            size: '56 MB',
            uploadTime: '1 day ago',
            date: 'Feb 2, 2025',
            type: 'pdf'
        },
    ];
    
    const handleView = (file) => {
        showMessage.info(`Opening ${file.name}... 👁️`);
        // يمكن إضافة window.open(file.url, '_blank') هنا
        console.log('View file:', file);
    };
    
    const handleDownload = (file) => {
        const loadingToast = showMessage.loading('Downloading file... ⏳');
        setTimeout(() => {
            showMessage.dismiss(loadingToast);
            showMessage.success(`${file.name} downloaded successfully! 📥`);
            console.log('Download file:', file);
        }, 800);
    };
    
    return (
        <div className="space-y-4">
            {files.map(file => (
                <CreativeCard key={file.id} className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                <FileText className="text-white" size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-base text-gray-900 truncate">{file.name}</p>
                                <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-600">
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-4 h-4 text-purple-600" />
                                        <span className="font-medium">{file.uploader}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="font-semibold text-blue-600">{file.size}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-green-600" />
                                        <span className="font-medium">{file.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <button 
                                onClick={() => handleView(file)}
                                className="p-2.5 hover:bg-blue-100 rounded-lg transition-colors group"
                                title="View file"
                            >
                                <Eye size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                            </button>
                            <button 
                                onClick={() => handleDownload(file)}
                                className="p-2.5 hover:bg-green-100 rounded-lg transition-colors group"
                                title="Download file"
                            >
                                <Download size={20} className="text-gray-600 group-hover:text-green-600 transition-colors" />
                            </button>
                        </div>
                    </div>
                </CreativeCard>
            ))}
        </div>
    );
}