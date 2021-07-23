import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    ul: {
        justifyContent: "space-around"
    }
}));

const Paginate = ({ page, numberOfPages, uuid, disabled, review }) => {
    const classes = useStyles();

    return (
        <Pagination
            disabled={disabled}
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={parseInt(page) + 1 || 1}
            variant="outlined"
            color="primary"
            renderItem={item => (
                <PaginationItem
                    {...item}
                    component={Link}
                    to={review ? `/${uuid}/review/?page=${item.page - 1}` : `/${uuid}/?page=${item.page - 1}`}
                />
            )}
        />
    );
}

export default Paginate;