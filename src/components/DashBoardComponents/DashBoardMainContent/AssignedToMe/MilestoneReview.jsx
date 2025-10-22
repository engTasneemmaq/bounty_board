/** @format */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock, Download, Plus, Globe } from "lucide-react";
import { showMessage } from "../../../../utils/toast";

const Badge = () => (
  <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-600">
    Awaiting Review
  </span>
);

const Card = ({ title, action, children }) => (
  <div className="rounded-xl border bg-white shadow-sm">
    {title && (
      <div className="flex items-center justify-between border-b px-5 py-3">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        {action}
      </div>
    )}
    <div className="p-5">{children}</div>
  </div>
);

const FileRow = ({ name = "file.pdf", size = "2.3 MB", onDownload, onDelete }) => (
  <div className="flex items-center justify-between rounded-lg border px-4 py-3">
    <div className="flex items-center gap-2 text-sm">
      <div className="grid h-7 w-7 place-items-center rounded-md bg-blue-50 text-blue-600">
        <Download className="h-4 w-4" />
      </div>
      <div>
        <div className="font-medium text-gray-800">{name}</div>
        <div className="text-xs text-gray-400">{size}</div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button onClick={onDownload} className="rounded-md border px-3 py-1.5 text-xs hover:bg-gray-50">Download</button>
      <button onClick={onDelete} className="rounded-md border px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50">Delete</button>
    </div>
  </div>
);

export default function MilestoneReview() {
  const [github, setGithub] = useState("https://github.example.com/milestone-1");
  const [notes, setNotes] = useState("Short delivery notes…");
  const navigate = useNavigate();

  const handleDownload = (fileName) => {
    showMessage.loading('Downloading file...');
    setTimeout(() => {
      showMessage.success(`${fileName} downloaded successfully! 📥`);
    }, 500);
  };

  const handleDelete = (fileName) => {
    showMessage.warning(`${fileName} deleted! ⚠️`);
  };

  const handleAddFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e) => {
      showMessage.success(`${e.target.files.length} file(s) added! ✅`);
    };
    input.click();
  };

  const handleSubmit = () => {
    showMessage.loading('Submitting milestone...');
    setTimeout(() => {
      showMessage.success('Milestone submitted successfully! ✅');
      navigate('/dashboard/assigned');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* ===== breadcrumb + view details ===== */}
      <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-2">
        <div className="text-[13px] text-gray-500">
          <Link to="/dashboard/assigned" className="hover:underline hover:text-gray-700">
            Assigned to Me
          </Link>
          <span className="mx-1 text-gray-300">/</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Milestone Name</span>
        </div>
        <Link to="/dashboard/bounty-name-overview/1" className="text-sm font-medium text-blue-600 hover:underline">
          View Details →
        </Link>
      </div>
      {/* ===================================== */}

      <Card>
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <Badge />
              <span className="text-sm text-gray-600">Your Role: Machine Learning Engineer</span>
              <span className="text-sm text-gray-600">• You Earn: 4000$</span>
              <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                <Clock className="h-4 w-4" /> 2 days Remaining
              </span>
            </div>
            <h1 className="mb-2 text-xl font-semibold text-gray-900">Milestone Name</h1>
            <p className="text-sm leading-relaxed text-gray-600">
              Submission sent. You can still manage files and notes while it’s under review.
            </p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
            View Details →
          </a>
        </div>
      </Card>

      <Card title="Submit Work" action={<button onClick={() => showMessage.info('Editing mode... ✏️')} className="text-xs text-gray-500 hover:text-gray-700">Edit</button>}>
        <div className="grid gap-4">
          <FileRow 
            name="file 1" 
            onDownload={() => handleDownload('file 1')}
            onDelete={() => handleDelete('file 1')}
          />
          <FileRow 
            name="file 2" 
            onDownload={() => handleDownload('file 2')}
            onDelete={() => handleDelete('file 2')}
          />
          <FileRow 
            name="file 3" 
            onDownload={() => handleDownload('file 3')}
            onDelete={() => handleDelete('file 3')}
          />

          <button 
            onClick={handleAddFile}
            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed py-3 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" /> Add File
          </button>

          <div className="mt-2">
            <div className="mb-1 text-xs font-semibold text-gray-600">
              GitHub Repository <span className="text-gray-400">(optional)</span>
            </div>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                className="w-full rounded-lg border px-9 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="mb-1 text-xs font-semibold text-gray-600">Notes</div>
            <textarea 
              className="w-full rounded-lg border bg-gray-50 p-3 text-sm" 
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="pt-1">
            <button 
              onClick={handleSubmit}
              className="mx-auto block rounded-lg bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700"
            >
              Submit Milestone
            </button>
            <div className="mt-2 text-center text-xs text-gray-400">
              Please upload at least one file or add delivery notes to submit.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
