const Autocomplete = () => {

  $(document).ready(function () {
    $('select[data-toggle="select2"]').select2();
  });
  return (
    <>
      <select className="form-control select2" data-toggle="select2">
        <option>Select</option>
        <optgroup label="Alaskan/Hawaiian Time Zone">
          <option value="AK">Alaska</option>
          <option value="HI">Hawaii</option>
        </optgroup>
        <optgroup label="Pacific Time Zone">
          <option value="CA">California</option>
          <option value="NV">Nevada</option>
          <option value="OR">Oregon</option>
          <option value="WA">Washington</option>
        </optgroup>
      </select>
    </>
  );
};

export default Autocomplete;
