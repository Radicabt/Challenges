import React from "react";
import './Filters.css';

interface FiltersProps {
  onFilterChange: (filterType: string, value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="filters p-3 bg-light">
      <h4>Bikes</h4>
      <p>Filter by:</p>
      <hr />
      <div className="filter-category">
        <h6>Gender</h6>
        <ul className="list-unstyled">
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("gender", "Show All")}
            >
              Show All <span className="badge badge-secondary">63</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("gender", "Male")}
            >
              Male <span className="badge badge-secondary">43</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("gender", "Female")}
            >
              Female <span className="badge badge-secondary">20</span>
            </button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="filter-category">
        <h6>Brand</h6>
        <ul className="list-unstyled">
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "LE GRAND BIKES")}
            >
              LE GRAND BIKES <span className="badge badge-secondary">7</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "KROSS")}
            >
              KROSS <span className="badge badge-secondary">14</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "EXPLORER")}
            >
              EXPLORER <span className="badge badge-secondary">8</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "VISITOR")}
            >
              VISITOR <span className="badge badge-secondary">8</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "PONY")}
            >
              PONY <span className="badge badge-secondary">2</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "FORCE")}
            >
              FORCE <span className="badge badge-secondary">2</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "E-BIKES")}
            >
              E-BIKES <span className="badge badge-secondary">7</span>
            </button>
          </li>
          <li>
            <button
              className="btn text-secondary"
              onClick={() => onFilterChange("brand", "IDEAL")}
            >
              IDEAL <span className="badge badge-secondary">15</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;